import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../axios/auth_api'
import { clients_api } from '../../axios/clients_api'
import { ContainerFloat, Form, ImageFloat } from '../../components/LoginLayout/styles'
import { CompleteData, Loading, RegisterSuccesfull } from '../../components/Modals'
import { Images } from '../../context/general'
import { Button, IconPassword } from '../Login/styles'
import * as styles from './styles'

const openFile = () => (
  document.getElementById('imageUploader').click()
)

const InputImageOnchange = evt => {
  const inputImage = document.getElementById('imageUploader')
  const image = document.getElementById('imageProfile')
  const [file] = inputImage.files
  if (file) {
    image.src = URL.createObjectURL(file)
  }
}

let body
const Register = () => {
  const [showModal, setShowModal] = useState(false)
  const [cookies, setCookie] = useCookies(['cookie-name'])
  const [isLoading, setIsLoading] = useState(false)
  const [registerSuccessful, setRegisterSuccessful] = useState(false)
  const [user, setUser] = useState(
    {
      name: '',
      email: '',
      password: '',
      role: 'admin'
    }
  )
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm_password')
    if (password.value === confirmPassword.value) {
      setIsLoading(true)
      user.name = e.target[1].value
      user.email = e.target[2].value
      user.password = e.target[3].value
      setUser(user)
      clients_api.calls.register(user).then(e => {
        setIsLoading(false)
        setRegisterSuccessful(true)
      }).catch(e => {
        setIsLoading(false)
        body = 'Error al crear el usuario, el usuario ya existe'
        setShowModal(true)
      })
    } else {
      setShowModal(true)
    }
  }

  const handleAccept = (e) => {
    navigate('/')
  }

  const handleModal = (e) => {
    e.preventDefault()
    body = 'La contraseña no coincide, por favor modifíquela.'
    setShowModal(false)
  }

  const handleSeePassword = () => {
    const password = document.getElementsByName('password')[0]
    const confirmPassword = document.getElementsByName('confirm_password')[0]
    password.type = 'text'
    confirmPassword.type = 'text'
  }
  return (
    <>
      {showModal && <CompleteData body={body}><button onClick={e => handleModal(e)}>SALIR</button></CompleteData>}
      <Form onSubmit={e => handleRegister(e)}>
        <ContainerFloat>
          <ImageFloat src='https://cr-tools.s3.amazonaws.com/img/crtools+blanco.png' />
        </ContainerFloat>
        {registerSuccessful &&
          <RegisterSuccesfull>
            <button onClick={e => handleAccept(e)}>ACEPTAR</button>
          </RegisterSuccesfull>}
        {isLoading && <Loading />}
        <styles.ContainerImageInputs>
          <styles.ContainerInputs>
            <styles.InputImage id='imageUploader' name='image' accept='image/*' type='file' alt='Image Profile' onChange={InputImageOnchange} />
            <styles.ImageProfile id='imageProfile' src={Images.user} onClick={() => openFile()} />
          </styles.ContainerInputs>
          <styles.ContainerInputs>
            <styles.Input placeholder='Nombre' name='name' type='text' required />
          </styles.ContainerInputs>
          <styles.ContainerInputs>
            <styles.Input placeholder='Correo Electrónico' name='email' type='email' required />
          </styles.ContainerInputs>
        </styles.ContainerImageInputs>
        <styles.ContainerInputs>
          <styles.Icon src={Images.lock} />
          <styles.Input id='password' placeholder='Contraseña' name='password' type='password' required />
          <IconPassword onClick={e => handleSeePassword()} src={Images.see} />
        </styles.ContainerInputs>
        <styles.ContainerInputs>
          <styles.Icon src={Images.lock} />
          <styles.Input id='confirm_password' placeholder='Confirma contraseña' name='confirm_password' type='password' required />
          <IconPassword onClick={e => handleSeePassword()} src={Images.see} />
        </styles.ContainerInputs>
        <styles.ContainerLinks>
          <Link to='/login'>
            <styles.AnchorLinks>
              Ya tengo cuenta
            </styles.AnchorLinks>
          </Link>
        </styles.ContainerLinks>
        <Button type='submit'>Registrar</Button>
      </Form>
    </>
  )
}

export default Register
