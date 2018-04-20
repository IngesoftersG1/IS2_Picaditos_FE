import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';

export default class Perfil extends Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
          setTimeout(() => this.setState({ isLoading: false }), 500);
      }
  
   
  

 render() {
    if(this.state.isLoading){ 
    return (<div>
    
        {Example}
    
        </div>); // render the loading component
    }
  	 	
  	 	
    return (
    <div>	
	<div className="cont_2">
		<div className="container"> 	
		  <div className="row align-items-start"> 
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/perfil.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-6">
		  		<h1>{JSON.parse(sessionStorage.user).nombres}</h1>
		  		<h4>{JSON.parse(sessionStorage.user).user_name}</h4>
		  	</div>
		  	<div className="col-md-2">		  		
		  		<Link to='/edit_perfil'>
		  			<button className="btn">Editar Perfil</button>
		  		</Link>
		  	</div>
		  	<div className="col-md-2">
		  		<Link to='/Configuracion'>
		  			<button className="btn">Configuración</button>
		  		</Link>
		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul className="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#perfil">Perfil</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#info">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		  </ul>

		  <div className="tab-content">
		    <div id="perfil" className="tab-pane active">
		      <h3>Perfil</h3>
		    </div>
		    <div id="info" className="tab-pane fade">
		      <h3>Información</h3>
		    </div>
		    <div id="estat" className="tab-pane fade">
		      <h3>Estadisticas</h3>
		      	<Link to='/pdf'>
		  			<button className="btn">ver estadisticas</button>
		  		</Link>
		    </div>
		  </div>
	
		</div>
	</div>
	</div>   

    	
      
    )
  }
	
}
