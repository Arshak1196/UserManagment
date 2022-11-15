import styled from "styled-components";

export const FormInput = styled.input`
    border-radius:8px;
    width:${props=>props.size?'auto':'100%'};
    height:${props=>props.size?'1.5rem':'2.2rem'};
    border: 2px solid grey;
    background-color: #e0ebeb;
`