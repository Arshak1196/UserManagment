import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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
cursor:pointer;
`
const SortDiv=styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const ArrowUp = styled.div`
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(-135deg);
-webkit-transform: rotate(-135deg);
margin-right:10px;
cursor:pointer;
`
const ArrowDown = styled.div`
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

function UsersTable() {
  let users = useSelector((state) => state.users.users)
  let length = users.length
  const [tableData, setTableData] = useState([])
  const [filterData,setFilterData]=useState([])
  const [pages, setPages] = useState(0)
  const [currentpage, setCurrentpage] = useState(1)
  const [rowperPage, setRowperPage] = useState(15)

  useEffect(()=>{
    console.log('ello')
    setFilterData(users) 
  },[])

  useEffect(() => {    
    console.log('hai')
    setTableData(filterData.slice(0, rowperPage))
  }, [filterData])

  const handleNext = () => {
    if(currentpage<filterData.length/rowperPage){
      setTableData(users.slice((currentpage * rowperPage), (currentpage * rowperPage) + rowperPage))
      setCurrentpage(currentpage + 1)
    }
  }

  const handlePrevious = () => {
    console.log(currentpage)
    if (currentpage === 0) {
      return
    }
    setCurrentpage(currentpage - 1)
    setTableData(users.slice((currentpage * rowperPage) - rowperPage, (currentpage * rowperPage)))
  }

  const sortAscending=()=>{
    let data=filterData.sort((a,b)=>{
      let fa = a.fname.toLowerCase(),
        fb = b.fname.toLowerCase();
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
    })
    console.log(121212)
    setFilterData(data)
    console.log(filterData)
  }


  return (
    <Div>
      <Table>
        <thead>
          <tr>
          <Th>Sl.No</Th>
          <Th>First Name <SortDiv><ArrowUp onClick={()=>sortAscending()} /> <ArrowDown/></SortDiv></Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          </tr>
        </thead>
        <tbody>
          {tableData[0] &&
            tableData.map((user, index) => {
              return (
                <Tr key={user.fname}>
                  <Td>{index + 1 + ((currentpage - 1) * rowperPage)}</Td>
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
          <PgNum onClick={() => handlePrevious()} >&laquo;</PgNum>
          {/* <PgNum >1</PgNum>
          <PgNum >2</PgNum>
          <PgNum >3</PgNum>
          <PgNum >4</PgNum>
          <PgNum >5</PgNum> */}
          <PgNum onClick={() => handleNext()} >&raquo;</PgNum>
        </Pagination>
      </Center>
    </Div>
  )
}

export default UsersTable