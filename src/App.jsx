import { useEffect, useState } from 'react'
import './App.css'
import useCRUD from './hooks/useCRUD'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

function App() {

  const [isShow, setIsShow] = useState(false)
  const [update, setUpdate] = useState()
  const [users, getUsers, createUser, deleteUser, updateUser] = useCRUD()

  useEffect(() => {
    getUsers('/users')
  }, [])


  const handleForm = () => { 
    setIsShow(true)
  }

  return (
    <div className='app'>
      <div className='app_header'>
        <h1>Usuarios</h1>
        <button onClick={handleForm}>Crear usuario</button>
      </div>
      <UserForm
        updateUser = {updateUser}
        createUser = {createUser}
        setUpdate = {setUpdate}
        update = {update}
        isShow = {isShow}
        setIsShow={setIsShow}
      />
      <div className='app_container'>
        {
          users?.map((user) => (
            <UserCard
              key = {user.id}
              user = {user}
              setIsShow = {setIsShow}
              deleteUser = {deleteUser}
              setUpdate = {setUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
