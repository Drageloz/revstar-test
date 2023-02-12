import React from 'react'
import { ContainerInternalNavBar, ContainerInternalNavBar2, ContainerInternalNavBar4, ContainerInternalNavBarTwoColumsn, SubTitle, Title } from '../../components/Layout/styles'
import { TableCompany } from '../../components/TableCompany'
import * as styles from './styles'

const Home = () => {

  return (
    <>
      <styles.Container>
        <Title>REVSTAR INVENTARY</Title>
        <SubTitle>A continuación las compañías registradas</SubTitle>
        <ContainerInternalNavBar>
          <button className='active'>Compañías</button>
        </ContainerInternalNavBar>
        <styles.ContainerTableFilter>
          <TableCompany/>
        </styles.ContainerTableFilter>
      </styles.Container>

    </>
  )
}

export default Home
