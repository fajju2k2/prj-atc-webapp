import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyle } from './Components/Styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';

import Header from './Components/Header';

function App() {
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgb(24 24 29)',
      white: '#fff',
      skyblue: 'skyblue',
      helper: 'red',
      bg: 'rgb(249 249 255)',
      footer_bg: 'black',
      btn: 'rgb(98 84 243)',
      border: 'gray',
      hr: '#ffffff',
      gradient:
        'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: { mobile: '990px', tab: '1010px' },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/Contactus' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
