import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

 *{
    margin:0;
    padding:0
 }

 body{
    backgrund:#fff;
    font-family: 'Poppins', sans-serif;
    
 }

`

export default GlobalStyles