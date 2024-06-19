import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UserForm = ({createUser, update, updateUser, setUpdate, isShow, setIsShow}) => {

    useEffect(() => {
        reset(update)
    }, [update])
    
    const {handleSubmit, register, reset} = useForm()

    const submit = (data) => {
        if (update) {
            updateUser('/users', update.id, data)
            setUpdate()
        } else {
            createUser('/users', data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
        setIsShow(false)
    }

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
        setIsShow(false)
        setUpdate()
    }

  return (
    <div className={`userForm ${isShow && 'active'}`}>
        <form className='userForm_form' onSubmit={handleSubmit(submit)}>
            <div className='userForm_header'>
                <h2 className='userForm_title'>
                    {
                        update ?
                            'Editar ususario'
                            :
                            'Nuevo usuario'
                    }
                </h2><button onClick={handleClose} className='userForm_close' type='button'>x</button>
            </div>
            <div className='userForm_item'>
                <label className='userForm_label' htmlFor="first_name">Nombre</label>
                <input {...register('first_name')} id='first_name' type="text" />
            </div>
            <div className='userForm_item'>
                <label className='userForm_label' htmlFor="last_name">Apellido</label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div className='userForm_item'>
                <label className='userForm_label' htmlFor="email">Correo</label>
                <input {...register('email')} id='email' type="email" />
            </div>
            <div className='userForm_item'>
                <label className='userForm_label' htmlFor="password">Contraseña</label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div className='userForm_item'>
                <label className='userForm_label' htmlFor="birthday">Fecha de nacimiento</label>
                <input {...register('birthday')} id='birthday' type="date"/>
            </div>
            <button className='userForm_btn'> 
                {
                    update ?
                        'Guardar cambios'
                        :
                        'Crear usuario'
                }
            </button>
        </form>
    </div>
  )
}

export default UserForm