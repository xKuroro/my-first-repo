import './App.css';
import Globalsyles from './components/global/Globalsyles';
import * as s from './components/global/Globalsyles';
import NavbarContainer from './components/NavbarContainer';
import { lightTheme, darkTheme} from './components/Theme';
import styled,{ ThemeProvider } from 'styled-components';
import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Depressings from './components/Collection/Depressing';
import Memess from './components/Collection/Memes';
import Hentais from './components/Collection/Hentai';
function App() {
  const [theme, setTheme] = useState("light");
  const [toggleText, setToggleText] = useState("");
  const themeToggler = () => {
    if(theme === 'light'){
      setTheme('dark')
      setToggleText('Dark mode')
      console.log(toggleText);
    }else{
      setTheme('light')
      setToggleText('Light mode')
      console.log(toggleText);
    }
}
  useEffect(() => {
    setToggleText('Light mode')
    console.log('render');
  },[App])

  return (
  
    <>  
    
      <ThemeProvider theme = { theme === "light" ? lightTheme : darkTheme }>
       <Router> 
      <Globalsyles /> 
      <s.Container> 
       <NavbarContainer themeToggler={themeToggler} toggleText={toggleText} theme={theme}/>
      </s.Container>
        <Switch>
          <Route path='/depressing' exact component={Depressings}/>
          <Route path='/memes' exact component={Memess} />
          <Route path='/hentai' exact component={Hentais} />
        </Switch>
      </Router>  
      </ThemeProvider>
      
    </>
   
  );
}


export default App;
