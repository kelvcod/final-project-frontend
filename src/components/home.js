import React from 'react';
//import { useParams } from 'react-router';
import ServiceCard from './ServiceCards';
import 'materialize-css/dist/css/materialize.min.css';


const home = ({services})=> {
    //const {id} = useParams();
    if (!services) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
           {services
            .map((service, index) => (<ServiceCard service={service}  key={index}/>))}
        </div>
    )
}

export default home
