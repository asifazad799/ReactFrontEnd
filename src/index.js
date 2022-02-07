import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Container from '@mui/material/Container';
import {Provider} from 'react-redux';
import Store from './components/students/redux-toolkit/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
        {/* <Container  maxWidth="lg"> */}
          <Router>
            <App/>
          </Router>
        {/* </Container> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


