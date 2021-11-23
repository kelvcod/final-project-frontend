import './App.css';
// import React, { useState, useEffect} from 'react';
import Home from './components/home';
import Cards from './components/cards';
import 'materialize-css/dist/css/materialize.min.css'



// const App = () =>{
//   const [ content, setContent] = useState();
//   useEffect(() =>{
//     fetch("/")
//     .then((res)=> res.json())
//     .then((data) =>{
//       setContent(data)
//     })
//   })
// }

function App() {
  return (<div classname="app"> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Home /> </div>);
}

export default App;