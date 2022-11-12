import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthFormTitle } from '../Components/Styles/AuthFormTitle.styled'
import { AuthFormContainer } from '../Components/Styles/AuthFormContainer.styled'
import { Button } from '../Components/Styles/Button.styled'
import { logout } from '../redux/auth/authActions'
import { TableContainer } from '../Components/Styles/TableContainer.styled'
import UsersTable from '../Components/UsersTable'


function Home() {
  const dispatch = useDispatch()
  return (
    <AuthFormContainer>
      <TableContainer>
        <AuthFormTitle>Users Table</AuthFormTitle>
        <UsersTable/>
      </TableContainer>
      <Button onClick={() => dispatch(logout())}>Logout</Button><br />
    </AuthFormContainer>
  )
}

export default Home