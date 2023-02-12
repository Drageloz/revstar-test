import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Title } from '../Layout/styles'
import * as styles from './styles'

export const FormUpdateCompany = ({ company, hiddenModal, action }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: useMemo(() => {
      return {
        nit: company?.nit,
        name: company?.name,
        address: company?.address,
        phone: company?.phone
      }
    }, [company])
  })

  const onSubmit = data => { action(data) }

  return (
    <>
      <Title>Compañía</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <styles.FormUserContainer>
          <div>
            <label>NIT</label>
            <styles.Input {...register('nit', { required: true })}/>
            {errors.nit && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
          <div>
            <label>Nombre</label>
            <styles.Input {...register('name', { required: true })} />
            {errors.name && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
          <div>
            <label>Dirección</label>
            <styles.Input {...register('address', { required: true })} />
            {errors.address && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
          <div>
            <label>Teléfono</label>
            <styles.Input {...register('phone', { required: true })} type='number'/>
            {errors.phone && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
        </styles.FormUserContainer>
        <styles.Buttons>
          <button type='submit'>Aceptar</button>
          <button type='button' onClick={hiddenModal}>Cancelar</button>
        </styles.Buttons>
      </form>
    </>
  )
}
