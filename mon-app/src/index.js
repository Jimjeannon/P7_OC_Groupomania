import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Dark from './feedback/dark'
ReactDOM.render(
  
<BrowserRouter>
< Dark />
<App/>
</BrowserRouter>,

  document.getElementById('root')
);


