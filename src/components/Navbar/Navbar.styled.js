import styled from 'styled-components'
import { Container } from '../global/Globalsyles';


export const NavContainer = styled.div`
  display:flex;
  position:fixed;
  background-color: ${props => props.theme.body};
  width: 100%;
  height:50px;
  align-items: center; 
  flex-wrap: wrap;
  justify-content:space-between;
  margin:0;
  padding:0;
  box-shadow:0 0 2px 1px ${props => props.theme.boxShadow};
  
`;

export const NavcontainerElements = styled.div`
position:relative;
display:flex;
width: 100%;
height
justify-content: space-between;
align-items: center;
background-color: #DEB887;
padding:5px;
margin-left:3px;
box-shadow:${props => props.theme.boxshadow};


${Container}    
`;
export const NavLogosContainer = styled.div`
width: 40%;
height: 80%;
align-items: center;
display:flex;
justify-content:space-around;
background-color:none;
color: ${props => props.theme.color};
cursor:pointer;
`;
export const SearchBar = styled.div`

`;

export const SearchText = styled.input`
width:10%;
border-radius: 7px;
border:none;
transition: 1s;
background-color:none;

&:hover{
width:30%;

}
`;

export const SidebarArrow = styled.div `
  width: 30px;
  color: ${props => props.theme.color};
  transition: 0.5s;
  left: 0;
  cursor: pointer;
`;

export const TopbarContainer = styled.div`
  display:flex;
  top:50px;
  right:0;
  position:absolute;
  border-radius: 6px;
  background-color: ${props => props.theme.bgcolor1};
  color:${props => props.theme.color}
  width:340px;
  height: 150px;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%), 0px 0px 2px rgb(0 0 0 / 10%);

  
`;

export const NavIconContainers = styled.div`
    display:flex;
    width: 67%;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
    font-size:1.4rem;
    align-items: center;
    padding: 0;
    margin: 0;


    .active{
      background-color:gray;
    }
    

`;

  export const Loginlink = styled.a`
  font-family: 'Ubuntu', sans-serif;
  display: inline-block;
  color: #999;
  line-height: 30px;
  height: 25px;
  padding: 0 12px;
  font-weight: 700;

  &:active{
    border:1px solid gray;
  }

  `;
