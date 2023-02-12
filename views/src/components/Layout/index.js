import React, { Suspense, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { Images } from '../../context/general'
import { CompleteData, LoadingWithText } from '../Modals'
import * as styles from './styles'


// Lazy loading for different components
const Home = React.lazy(() => import('../../pages/Home'))
const Inventary = React.lazy(() => import('../../pages/Inventary'))

const Images_Navbar = [
  { key: 'hamburger', url: Images.hamburger },
  { key: 'close', url: Images.close_arrow }
]

export const Layout = ({ screen }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showPanel, setShowPanel] = useState(false)
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)

  
  // Check if user data exist
  useEffect(() => {
    if (data?.username !== '') {
      setIsLoading(false)
      setShowPanel(true)
    }
  }, [data])

  const handleLogout = (e) => {
    console.log('Logout')
    removeCookie('jwt', { path: '/' })
    navigate('/')
  }

  return (
    <>
      {isLoading && <LoadingWithText />}
      <styles.Container>
        <styles.Navbar>
          <styles.Image src='https://www.elevate-inc.com/wp-content/uploads/2021/10/REVSTAR-LOGO-01-e1635250695458.jpg' />
          <styles.ListItemsNavbar>
            <styles.ItemNav onClick={e => handleLogout(e)}>
              <styles.ContainerItems>
                <styles.ItemsTextNavbar>Salir</styles.ItemsTextNavbar>
              </styles.ContainerItems>
            </styles.ItemNav>
          </styles.ListItemsNavbar>
        </styles.Navbar>
        <styles.Section>
          <styles.ContainerContent>
            {showPanel &&
              <styles.Screen>
                {screen === 'home' && <Suspense fallback={<LoadingWithText />}><Home /></Suspense>}
                {screen === 'inventary' && <Suspense fallback={<LoadingWithText />}><Inventary /></Suspense>}
              </styles.Screen>}
          </styles.ContainerContent>
        </styles.Section>
      </styles.Container>
    </>
  )
}
