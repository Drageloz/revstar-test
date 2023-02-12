import React, { useEffect, useState } from 'react'
import * as styles from './styles'
import { Form, ContainerFloat, ImageFloat } from '../../components/LoginLayout/styles'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../../axios/auth_api'
import { useCookies } from 'react-cookie'
import { Images } from '../../context/general'
import { CompleteData, Loading, LoadingWithText } from '../../components/Modals'

let body
const Login = () => {
  const [cookies, setCookie] = useCookies(['cookie-name'])
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [tokenCaptcha, setTokenCaptcha] = useState(false)
  const [searchParams] = useSearchParams()

  const sendRequest = (e) => {
    e.preventDefault()
    if (!tokenCaptcha) {
      body = 'Por favor verifique el captcha'
      setShowModal(true)
      return
    }
    const email = document.getElementsByName('email')[0].value
    const password = document.getElementsByName('password')[0].value

    setIsLoading(true)
    api.calls.autenthicate({ email: email, password: password, tokenCaptcha: tokenCaptcha }).then(res => {
      console.log(res)
      setCookie('jwt', res.data.access_token)
      navigate('/home')
    }).catch(function (error) {
      const dataError = error.toJSON()
      if (dataError.status === 403) {
        body = 'Captcha Invalido'
        setShowModal(true)
        setIsLoading(false)
      }
      body = 'Datos Incorrectos, por favor verifique su usuario y contraseña y vuelva a intentarlo'
      setShowModal(true)
      setIsLoading(false)
    }
    )
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt) {
      navigate('/home')
    }
  }, [])

  const handleClickDemo = (e) => {
    e.preventDefault()
    setCookie('jwt', 'value')
    navigate('/projects')
  }

  const handleModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  }

  const handleSeePassword = () => {
    const password = document.getElementsByName('password')[0]
    if (password.type === 'text') {
      password.type = 'password'
    } else {
      password.type = 'text'
    }
  }

  useEffect(() => {
    const scriptText = document.createElement('script')
    scriptText.type = 'text/javascript'
    scriptText.innerHTML = "var onloadCallback = function() { grecaptcha.render('html_element', {'sitekey' : '6Lf-3o4iAAAAAEPKDllGp1e6bLYGzsPqQ60bdb7y'});};"
    document.head.appendChild(scriptText)

    // Add reCaptcha
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit'
    document.head.appendChild(script)

    window.callbackCaptcha = callbackCaptcha
  }, [])

  const callbackCaptcha = (response) => {
    setTokenCaptcha(response)
  }

  return (
    <>
      {isLoading && <LoadingWithText />}
      {showModal && <CompleteData body={body}><button onClick={e => handleModal(e)}>SALIR</button></CompleteData>}
      <Form onSubmit={e => sendRequest(e)}>
        <ContainerFloat>
          <ImageFloat src={Images.logo} />
        </ContainerFloat>
        {false && <Loading />}
        <styles.ContainerInputs>
          <styles.Input placeholder='Correo Electrónico' name='email' type='email' required />
        </styles.ContainerInputs>
        <styles.ContainerInputs>
          <styles.Icon src={Images.lock} />
          <styles.Input placeholder='Contraseña' name='password' type='password' required />
          <styles.IconPassword onClick={e => handleSeePassword()} src={Images.see} />
        </styles.ContainerInputs>
        <styles.ContainerLinks>
        </styles.ContainerLinks>
        <styles.ContainerInputs>
          <Link to={'/register' + (searchParams.get('promotional_code') ? '?promotional_code=' + searchParams.get('promotional_code') : '')}>
            <styles.AnchorLinks>
              Registrarme
            </styles.AnchorLinks>
          </Link>
        </styles.ContainerInputs>
        <styles.CaptchaRender id='html_element' data-sitekey={process.env.CAPTCHA_SITE_KEY} data-callback='callbackCaptcha' />
        <styles.Button>
          Ingresar
        </styles.Button>
        <styles.Separator>
          <div />
          <div />
          <div />
        </styles.Separator>
      </Form>
    </>
  )
}

export default Login
