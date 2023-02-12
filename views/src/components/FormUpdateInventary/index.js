import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Title } from '../Layout/styles'
import * as styles from './styles'

export const FormUpdateInventary = ({ inventary, hiddenModal, action }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: useMemo(() => {
      return {
        name: inventary?.name,
        description: inventary?.description,
        stock: inventary?.stock,
        price: inventary?.price,
        id: inventary?.id
      }
    }, [inventary])
  })

  const onSubmit = data => { action(data) }

  return (
    <>
      <Title>Inventario</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <styles.FormUserContainer>
          <div>
            <label>Nombre</label>
            <styles.Input {...register('name', { required: true })} />
            {errors.name && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
          <div>
            <label>Cantidad</label>
            <styles.Input {...register('stock', { required: true })} />
            {errors.stock && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
          <div>
            <label>Precio</label>
            <styles.Input {...register('price', { required: true })} type='number'/>
            {errors.price && <styles.SpanError>Este campo es requerido</styles.SpanError>}
          </div>
          <div>
            <label>Descripción</label>
            <styles.Input {...register('description', { required: true })} />
            {errors.description && <styles.SpanError>Este campo es requerido</styles.SpanError>}
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
