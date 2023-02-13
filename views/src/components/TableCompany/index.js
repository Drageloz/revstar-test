import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { clients_api } from '../../axios/clients_api'
import { AcceptTerms, LoadingWithText, ModalWidthChild } from '../Modals'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import * as styles from './styles'
import { FormUpdateCompany } from '../FormUpdateCompany/index.js'
import { companyApi } from '../../axios/company_api'
import { DataContext } from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'

let body
export const TableCompany = () => {
  const {data, setData} = useContext(DataContext)
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

  const onDeleteCompanyFetch = async (event, type) => {
    event.preventDefault()
    setIsLoading(true)
    await companyApi.calls.delete(idAction.nit, cookies.jwt).then(async res => {
      setShowModalDelete(false)
      setIdAction(null)
      await companyApi.calls.getAll(cookies.jwt).then(res => {
        setCompany(res.data.companies)
        setIsLoading(false)
      })
      body = 'Registro eliminado correctamente'
      setShowModalSuccess(true)
      setIsLoading(false)
    })
  }

  const onConfirmDelete = (event, key) => {
    event.preventDefault()
    body = `Seguro de eliminar la empresa ${company[key].name}`
    setShowModalSuccess(false)
    setShowModalUpdate(false)
    setIdAction(company[key])
    setShowModalDelete('company')
  }

  const onUpdateCompany = (event, key) => {
    event.preventDefault()
    if (idAction) return
    setShowModalDelete(false)
    setShowModalSuccess(false)
    setShowModalUpdate(true)
    setIdAction(company[key])
  }

  const hiddenModalUpdateCompany = () => {
    setIdAction(null)
    setShowModalUpdate(false)
    setShowModalDelete(false)
    setShowModalSuccess(false)
    setShowModalCreate(false)
  }

  const onUpdateCompanyFetch = (data) => {
    const companyDTO = {
      ...data
    }
    setIsLoading(true)
    companyApi.calls.upsert(companyDTO, cookies.jwt).then(async (res) => {
      setShowModalUpdate(false)
      setIdAction(null)
      await companyApi.calls.getAll(cookies.jwt).then(res => {
        setCompany(res.data.companies)
        setIsLoading(false)
      })
      body = 'Registro actualizado correctamente'
      setShowModalSuccess(true)
      setIsLoading(false)
    })
  }

  const showInventary = (event, key) => {
    navigate(`/inventary?nit=${company[key].nit}`)
  }

  useEffect(() => {
    companyApi.calls.getAll(cookies.jwt).then(res => {
      setCompany(res.data.companies)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {true && <LoadingWithText />}
      {showModalDelete === 'company' &&
        <AcceptTerms body={body}>
          <button onClick={e => onDeleteCompanyFetch(e, 'company')}>ACEPTAR</button>
          <button onClick={e => handleModal(e)}>SALIR</button>
        </AcceptTerms>}
      {showModalSuccess &&
        <AcceptTerms body={body}>
          <button onClick={e => handleModalSuccess(e)}>SALIR</button>
        </AcceptTerms>}
      {showModalUpdate &&
        <ModalWidthChild>
          <FormUpdateCompany
            company={idAction}
            hiddenModal={hiddenModalUpdateCompany}
            action={onUpdateCompanyFetch}
          />
        </ModalWidthChild>}

        <styles.ContainerTable>
        {data.role === 'admin' && <styles.ButtonCreate onClick={e => onUpdateCompany(e, null)}>+CREAR</styles.ButtonCreate>}
          <Paper sx={{ width: '100%', overflow: 'auto' }}>
            <TableContainer sx={{ maxHeight: 800 }}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>NIT</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Telefono</TableCell>
                    {data.role === 'admin' && <TableCell>Acciones</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(company)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(([key, company]) => {
                      return (
                        <TableRow hover role='checkbox' tabIndex={-1} key={key}>
                          <TableCell>{company.nit}</TableCell>
                          <TableCell>{company.name}</TableCell>
                          <TableCell>{company.address}</TableCell>
                          <TableCell>{company.phone}</TableCell>
                          {data.role === 'admin' && <TableCell align='left'>
                            <styles.actions><styles.itemActions onClick={(e) => onConfirmDelete(e, key)} src='https://cdn-icons-png.flaticon.com/512/3389/3389152.png' /></styles.actions>
                            <styles.actions><styles.itemActions onClick={(e) => onUpdateCompany(e, key)} src='https://cdn-icons-png.flaticon.com/512/6526/6526960.png' /></styles.actions>
                            <styles.actions><styles.itemActions onClick={(e) => showInventary(e, key)} src='https://upload.wikimedia.org/wikipedia/commons/6/66/Home_icon_blue-1.png  ' /></styles.actions>
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
              count={Object.keys(company).length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </styles.ContainerTable>
    </>
  )
}
