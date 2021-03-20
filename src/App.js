import './App.css';
import React from 'react';
import Display from './components/Display'
import NumberProvider from './context/numberContext'

//context API practice

function App() {

   return( <NumberProvider>
      <HomeNumber/>
   </NumberProvider>
   )

function HomeNumber() {
  return (
   <Display/>
  )
}  
 
}

export default App;
