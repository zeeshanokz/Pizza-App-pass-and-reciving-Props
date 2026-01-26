import React from 'react'
// import "./App.css";
// import './App.css'
import "./index.css"
import Pizza from './components/Pizza';


function App() {
  return (
    <>
    <Pizza name= "Tehzeeb Pizza" ingrediant= "Tehzeeb Special Pizza, tomato" price= "100"/>

    <Pizza name= "KFC Pizza" ingrediant= "Kfc Special Pizza" price= "300"/>

    <Pizza name= "Cheese Pizza" ingrediant= "Chesse Special Pizaa" price= "600"/>
    </>
  )
}

export default App;