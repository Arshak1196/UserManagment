import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { fetchUserdata } from '../functions/reducers'
import * as UserAPI from '../api/AuthRequests'
import { FETCH_USERS_FAILURE, FETCH_USERS_START, FETCH_USERS_SUCCESS } from '../functions/types'

const Div = styled.div`
 margin:0 1rem 0 1rem `

const Center = styled.div`
text-align: center;
margin-top:1rem
`
const Pagination = styled.div`
  display: inline-block;
`

const Table = styled.table`
  width:100%;
  border-collapse: collapse;
  
`
const Tr = styled.tr`
  &:nth-child(even){background-color: #f2f2f2;}
  &:hover{background-color: #ddd;}
`

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4d4d00;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
  `
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`

const PgNum = styled.p`
color: black;
float: left;
padding: 8px 16px;
text-decoration: none;
transition: background-color .3s;
border: 1px solid #ddd;
margin: 0 4px;
`

function UsersTable() {
  const [tableData, setTableData] = useState([])
  const [pages,setPages]=useState(0)
  const [{ user, loading, error }, dispatch] = useReducer(
    fetchUserdata, {
    loading: false,
    user: null,
    error: false
  }
  )
  useEffect(() => {
    getUserdetails()
  }, [])

  console.log(user?.length)

  const getUserdetails = async () => {
    dispatch({ type: FETCH_USERS_START })
    try {
      let data = await UserAPI.getUser()
      setTableData(data.data.slice(0, 10))
      dispatch({ type: FETCH_USERS_SUCCESS, payload: data.data })
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.response.data.message })
    }
  }

  return (
    <Div>
      <Table>
        <thead>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
        </thead>
        <tbody>
          {tableData[0] &&
            tableData.map((user) => {
              return (
                <Tr key={user.fname}>
                  <Td>{user.fname}</Td>
                  <Td>{user.lname}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              )
            })}
        </tbody>
      </Table>
      <Center>
        <Pagination>
          <PgNum >&laquo;</PgNum>
          <PgNum >1</PgNum>
          <PgNum >2</PgNum>
          <PgNum >3</PgNum>
          <PgNum >4</PgNum>
          <PgNum >5</PgNum>
          <PgNum >&raquo;</PgNum>          
        </Pagination>
      </Center>
    </Div>
  )
}

export default UsersTable