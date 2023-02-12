import React, { Suspense } from 'react'
import { Images } from '../../context/general'
import { LoadingWithText } from '../Modals'
import * as styles from './styles'

// Pages
const Login = React.lazy(() => import('../../pages/Login/index.js'))
const Register = React.lazy(() => import('../../pages/Register/index.js'))


export const LoginLayout = ({ login = 'login' }) => {

  return (
    <styles.Container>
      <styles.NavBar>
        <styles.ImageCompany src={Images.logo} />
        <styles.ContainerNavbarItems>
          <a href='https://revstarconsulting.com/' target='_blank' rel='noreferrer'><styles.ItemNavBar><styles.Image src={Images.home} /><li>¿Quiénes Somos?</li></styles.ItemNavBar></a>
        </styles.ContainerNavbarItems>
      </styles.NavBar>
      <styles.ContainerForm>
        <styles.ContainerCard>
          <hgroup>
            <h1>Bienvenido a Revstar Inventary</h1>
            <h3>Tu plataforma para llevar el control de inventario de tu empresa.</h3>
          </hgroup>
        </styles.ContainerCard>
        {login === 'login' && <Suspense fallback={<LoadingWithText />}><Login /></Suspense>}
        {login === 'register' && <Suspense fallback={<LoadingWithText />}><Register /></Suspense>}
        {login === 'recovery' && <Suspense fallback={<LoadingWithText />}><Recovery /></Suspense>}
      </styles.ContainerForm>
      <styles.Footer>
        <styles.ContainerItemsFooter>
          <styles.ItemFooter><styles.Image src={Images.email} /><li>contactenos@revstar.com</li></styles.ItemFooter>
          <styles.ItemFooter><styles.Image src={Images.suscribe} /><li>Suscríbete</li></styles.ItemFooter>
          <styles.ItemFooter><styles.Image src={Images.phone} /><li>(601) 111 11 11</li></styles.ItemFooter>
          <styles.ItemFooter><styles.Image src={Images.cellphone} /><li>111 111 11 11</li></styles.ItemFooter>
          <styles.ItemFooter><styles.Image src={Images.location} /><li>Cra 11 B No 11 – 11 Barrio Bogotá – Colombia</li></styles.ItemFooter>
          <styles.ContainerSocialMedia>
            <styles.SocialMedia><styles.ImageSocialMedia src={Images.facebook} /></styles.SocialMedia>
            <styles.SocialMedia><styles.ImageSocialMedia src={Images.twitter} /></styles.SocialMedia>
            <styles.SocialMedia><styles.ImageSocialMedia src={Images.youtube} /></styles.SocialMedia>
            <styles.SocialMedia><styles.ImageSocialMedia src={Images.linkedin} /></styles.SocialMedia>
            <styles.SocialMedia><styles.ImageSocialMedia src={Images.whatsapp} /></styles.SocialMedia>
          </styles.ContainerSocialMedia>
        </styles.ContainerItemsFooter>
      </styles.Footer>
    </styles.Container>
  )
}
