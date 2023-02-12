import React from 'react'
import ReactLoading from 'react-loading'
import { Images } from '../../context/general'
import {
  BackgroundBlack,
  ContainerLoading,
  TextRegistered,
  Container,
  Image,
  ColorComplete,
  Buttons,
  Button,
  TextTerms
} from './styles'


export const Loading = () => (
  <ContainerLoading>
    <ReactLoading type='spinningBubbles' color='rgba(243,111,35,0.75)' height={667} width={375} />
  </ContainerLoading>
)

export const LoadingWithText = () => (
  <BackgroundBlack>
    <ContainerLoading>
      <ReactLoading type='spinningBubbles' color='rgba(243,111,35,0.75)' height={667} width={375} />
      <TextRegistered>Estamos cargando la encuesta, esto podría tomar unos</TextRegistered>
    </ContainerLoading>
  </BackgroundBlack>
)


export const CompleteData = ({ children, body }) => (
  <Container>
    <Image src={Images.ImageS3} />
    <ColorComplete>{body}</ColorComplete>
    <Button>
      {children /** should be a button to close modal */}
    </Button>
  </Container>
)

export const RegisterSuccesfull = ({ children }) => (
  <Container>
    <Image src={Images.ImageS3OK} />
    <TextRegistered>Su Registro Fue Exitoso, lo redigiremos al login para que ingrese con las credenciales.</TextRegistered>
    <Buttons>
      {children /** should be a button to close modal */}
    </Buttons>
  </Container>
)

export const ModalWidthChild = ({ children }) => (
  <Container>
      {children}
  </Container>
)

export const AcceptTerms = ({ children, body }) => (
  <Container>
    <Image src={Images.ImageS3} />
    <TextTerms>{body}</TextTerms>
    <Buttons>
      {children /** should be a button to close modal */}
    </Buttons>
  </Container>
)