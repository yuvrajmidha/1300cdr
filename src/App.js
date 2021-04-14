import React, { useState } from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme'
import { HashRouter as Router } from 'react-router-dom';
import Views from './views';
import { Route, Switch } from 'react-router-dom';
import './assets/scss/_global.scss'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {


  return (
      <ChakraProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <Router>
            <Switch>
              <Route path="/" component={Views}/>
            </Switch>
          </Router>
        </DndProvider>
      </ChakraProvider>
  );
}

export default App;
