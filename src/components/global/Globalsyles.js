import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';


const Globalsyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap') ;

    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.theme.body};
        colorL ${(props) => props.theme.color};
        transition: all 0.25s linear;
    }
    font-family: 'Zen Antique Soft', serif;
    font-size: 1.5em;
    margin: 0;

   
        
        
    // }
    `;

export const  Container = styled.div`
    z-index: 1;
    width:100%;
    max-width: 1300px;
    margin-right:auto;
    margin-left:auto;
  
    
    @media screen and (max-width: 991px){
        padding-right:30px;

    }
`;



export default Globalsyles
