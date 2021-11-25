 import React, { useState, useEffect} from 'react';
import Home from './components/Home';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Switch, Route } from "react-router";
import Service from './components/Service';
import Breadcrumbs from './components/Breadcrumbs';

 const App = () =>{
  const [ services, setServices] = useState();
  //const [ users, setUsers] = useState();
  //const urlUsers = "https://mvp-finpro.herokuapp.com/users"
  const urlServices = "https://mvp-finpro.herokuapp.com/Services"
  

  useEffect(() =>{
    fetch(urlServices)
   .then((res)=> res.json())
   .then((data) =>{
    console.log(data)
     setServices(data)
     //setUsers(data)
     
   })
 }, [])  
 return (
   <div>
     <div>
       <Navbar />
     </div>
     <Switch>
       {/* <Route path="/">
           <About />
          </Route>
          <Route path="/">
            <Trending />
          </Route>
          <Route path="/">
            <Contact />
          </Route> */}
       <Route exact path="/">
         <Home services={services} />
       </Route>
       <Route exact path="/services/:id">
         <Service services={services} />
       </Route>
     </Switch>
     <div>
       <Footer />
     </div>
   </div>
 ); 
}

export default App;