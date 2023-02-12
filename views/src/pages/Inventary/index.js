import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerInternalNavBar, SubTitle, Title } from '../../components/Layout/styles'
import { TableInventary } from '../../components/TableInventary'
import { DataContext } from '../../context/DataContext'
import * as styles from './styles'

const Inventary = () => {
  const navigate = useNavigate()
  const {data, setData} = useContext(DataContext)

  useEffect(() => {
    if (data.role !== 'admin') {
      navigate('/home')
    }
  }, [])

  return (
    <>
      <styles.Container>
        <Title>REVSTAR INVENTARY</Title>
        <SubTitle>A continuación el Inventario</SubTitle>
        <ContainerInternalNavBar>
          <button className='active'>Inventario</button>
        </ContainerInternalNavBar>
        <styles.ContainerTableFilter>
          <TableInventary/>
        </styles.ContainerTableFilter>
      </styles.Container>

    </>
  )
}

export default Inventary
