import React from 'react'
import App from './App'
import ContextAppProvider from "./ContextAPI";

const Appp = () => {

  return (
    <ContextAppProvider>
      <App />
    </ContextAppProvider>
  )
}
export default Appp