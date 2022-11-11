import styled from "styled-components";

export const Button = styled.button`
background-color: ${props=>props.color || 'orange'} ;
border: none;
text-decoration: none;
color: white;
padding: 20px 20px;
margin: 20px 20px;
cursor: pointer;
&:hover{
    opacity:80%;
}

`