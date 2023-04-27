import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#707070',
    lightGray: '#f3f4f3',
    accent: 'red',
    green: 'green',
    red: 'orangeRed',
    lightBlue: '#14acdf',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
