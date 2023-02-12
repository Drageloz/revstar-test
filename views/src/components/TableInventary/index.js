import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { clients_api } from '../../axios/clients_api'
import { AcceptTerms, LoadingWithText, ModalWidthChild } from '../Modals'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import * as styles from './styles'
import { FormUpdateInventary } from '../FormUpdateInventary/index.js'
import { DataContext } from '../../context/DataContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import { companyApi } from '../../axios/company_api'
import { inventaryApi } from '../../axios/inventary_api'
import { jsPDF } from "jspdf";
import { applyPlugin } from 'jspdf-autotable'
import { utilsApi } from '../../axios/utils_api'
applyPlugin(jsPDF)

let body
export const TableInventary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {data, setData} = useContext(DataContext)
  const [inventary, setInventary] = useState({})
  const [company, setCompany] = useState({})
  const [cookies, setCookie] = useCookies(['cookie-name'])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)
  const [idAction, setIdAction] = useState(null)
  const navigate = useNavigate()
  const columns = [
    { title: "Nombre", field: "name", },
    { title: "Descripción", field: "description", },
    { title: "Cantidad", field: "stock" },
    { title: "Precio", field: 'price' }]


  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleModal = (event) => {
    event.preventDefault()
    setIdAction(null)
    setShowModalDelete(false)
    setShowModalSuccess(false)
    setShowModalUpdate(false)
  }

  const handleModalSuccess = (event) => {
    event.preventDefault()
    setShowModalSuccess(false)
    setShowModalDelete(false)
    setShowModalUpdate(false)
  }

  const onDeleteInventaryFetch = async (event, type) => {
    event.preventDefault()
    setIsLoading(true)
    await inventaryApi.calls.delete(idAction.id, cookies.jwt).then(async res => {
      setShowModalDelete(false)
      setIdAction(null)
      companyApi.calls.findByNit(searchParams.get("nit"), cookies.jwt).then(res => {
        setInventary(res.data.company.inventary)
        setCompany(res.data.company)
        setIsLoading(false)
      })
      body = 'Registro eliminado correctamente'
      setShowModalSuccess(true)
      setIsLoading(false)
    })
  }

  const onConfirmDelete = (event, key) => {
    event.preventDefault()
    body = `Seguro de eliminar el inventario ${inventary[key].name}`
    setShowModalSuccess(false)
    setShowModalUpdate(false)
    setIdAction(inventary[key])
    setShowModalDelete('inventary')
  }

  const onUpdateInventary = (event, key) => {
    event.preventDefault()
    if (idAction) return
    setShowModalDelete(false)
    setShowModalSuccess(false)
    setShowModalUpdate(true)
    setIdAction(inventary[key])
  }

  const hiddenModalUpdateInventary = () => {
    setIdAction(null)
    setShowModalUpdate(false)
    setShowModalDelete(false)
    setShowModalSuccess(false)
    setShowModalCreate(false)
  }

  const getCompanyDTO = (data, idAction) => {
    if (idAction) {
      const inventary = company.inventary.map(inventary => inventary.id === data.id ? data : inventary)
      return {...company, inventary: inventary}
    }
    return {...company, inventary:[...company.inventary, data]}

  }

  //TODO: finalice service to update save inventary
  const onUpdateInventaryFetch = (data) => {
    const companyDTO = getCompanyDTO(data, idAction)
    setIsLoading(true)
    companyApi.calls.upsert(companyDTO, cookies.jwt).then(async (res) => {
      setShowModalUpdate(false)
      setIdAction(null)
      companyApi.calls.findByNit(searchParams.get("nit"), cookies.jwt).then(res => {
        setInventary(res.data.company.inventary)
        setCompany(res.data.company)
        setIsLoading(false)
      })
      body = 'Registro actualizado correctamente'
      setShowModalSuccess(true)
      setIsLoading(false)
    })
  }


  useEffect(() => {
    companyApi.calls.findByNit(searchParams.get("nit"), cookies.jwt).then(res => {
      setInventary(res.data.company.inventary)
      setCompany(res.data.company)
      setIsLoading(false)
    })
  }, [])

  const createPdf = (operation) => {
    const doc = new jsPDF()
    doc.text("Detalles Del Inventario", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: inventary
    })
    if (operation === 'download') {
      doc.save('inventary.pdf')
      return
    }
    return doc
    
  }

  const sendPdf = () => {
    setIsLoading(true)
    const pdf = createPdf('send')
    const form = new FormData()
    form.append('inventary', pdf.output('blob'))
    utilsApi.calls.sendMail(form, cookies.jwt).then(res=> {
      body='Inventario enviado exitosamente'
      setShowModalSuccess(true)
      setIsLoading(false)
    })
  }

  return (
    <>
      {isLoading && <LoadingWithText />}
      {showModalDelete === 'inventary' &&
        <AcceptTerms body={body}>
          <button onClick={e => onDeleteInventaryFetch(e, 'inventary')}>ACEPTAR</button>
          <button onClick={e => handleModal(e)}>SALIR</button>
        </AcceptTerms>}
      {showModalSuccess &&
        <AcceptTerms body={body}>
          <button onClick={e => handleModalSuccess(e)}>SALIR</button>
        </AcceptTerms>}
      {showModalUpdate &&
        <ModalWidthChild>
          <FormUpdateInventary
            inventary={idAction}
            hiddenModal={hiddenModalUpdateInventary}
            action={onUpdateInventaryFetch}
          />
        </ModalWidthChild>}

        <styles.ContainerTable>
        {data.role === 'admin' && <styles.ButtonCreate onClick={e => onUpdateInventary(e, null)}>+CREAR</styles.ButtonCreate>}
        {data.role === 'admin' && <styles.ButtonCreate color='#173054' onClick={e => createPdf('download')}>DESCARGAR</styles.ButtonCreate>}
        {data.role === 'admin' && <styles.ButtonCreate color='#22A9D4' onClick={e => sendPdf()}>ENVIAR</styles.ButtonCreate>}
          <Paper>
            <TableContainer sx={{ maxHeight: 800 }}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio</TableCell>
                    {data.role === 'admin' && <TableCell>Acciones</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(inventary)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(([key, inventary]) => {
                      return (
                        <TableRow hover role='checkbox' tabIndex={-1} key={key}>
                          <TableCell>{inventary.name}</TableCell>
                          <TableCell>{inventary.description}</TableCell>
                          <TableCell>{inventary.stock}</TableCell>
                          <TableCell>{inventary.price}</TableCell>
                          {data.role === 'admin' && <TableCell align='left'>
                            <styles.actions><styles.itemActions onClick={(e) => onConfirmDelete(e, key)} src='https://cdn-icons-png.flaticon.com/512/3389/3389152.png' /></styles.actions>
                            <styles.actions><styles.itemActions onClick={(e) => onUpdateInventary(e, key)} src='https://cdn-icons-png.flaticon.com/512/6526/6526960.png' /></styles.actions>
                          </TableCell>}
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component='div'
              count={Object.keys(inventary).length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          {data.role === 'admin' && <styles.ButtonCreate color='#89DD59' onClick={e => navigate('/home')}>ANTERIOR</styles.ButtonCreate>}
        </styles.ContainerTable>
    </>
  )
}
