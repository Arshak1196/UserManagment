import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthFormTitle } from '../Components/Styles/AuthFormTitle.styled'
import { AuthFormContainer } from '../Components/Styles/AuthFormContainer.styled'
import { logout } from '../redux/auth/authActions'
import { TableContainer } from '../Components/Styles/TableContainer.styled'
import UsersTable from '../Components/UsersTable'
import styled from 'styled-components'

const Div=styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
padding-right:20px;
padding-bottom:10px;
`
const Tag=styled.p`
color:red;
text-decoration: underline; 
cursor:pointer;
`

function Home() {
  const dispatch = useDispatch()
  return (
    <AuthFormContainer>
      <TableContainer>
        <AuthFormTitle>Users Table</AuthFormTitle>
        <Div>
        <Tag onClick={() => dispatch(logout())}>Logout here</Tag>
        </Div>
        <UsersTable/>
      </TableContainer>
    </AuthFormContainer>
  )
}

export default Home