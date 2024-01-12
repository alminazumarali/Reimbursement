import React from "react";
import AppRoutes from './Routes/AppRoutes'
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './Store/Store'
import './App.scss'

function App() {
  return (
    <div className="App">
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes/>
        </PersistGate>
    </div>
  );
}

export default App;
