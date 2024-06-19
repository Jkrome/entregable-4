import React from 'react'
import './styles/userCard.css'


const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {


    const handleDelete = () => {
        deleteUser('/users', user.id);
    }
    const handleEdit = () => {
        setUpdate(user)
        setIsShow(true)
        
    }
    return (
    <article className='userCard'>
        <h2 className='userCard_name'>{user.first_name} {user.last_name}</h2>
        <hr className='userCard_sep' />
        <ul className='userCard_list'>
            <li className='userCard_item'><span>Correo</span><span>{user.email}</span></li>
            <li className='userCard_item'><span>Cumpleaños</span><span><ion-icon name="gift-outline"></ion-icon>{user.birthday}</span></li>
        </ul>
        <hr className='userCard_sep' />
        <div className='userCard_buttons'>
            <button className='userCard_btn' onClick={handleDelete}><ion-icon name="trash"></ion-icon></button>
            <button className='userCard_btn' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
        </div>
        
    </article>
  )
}

export default UserCard