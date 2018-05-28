import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';
import swal from 'sweetalert2'

export default class Usuario extends Component {
  state = {
    usuario: [], isLoading: true, calificacion: '2',
  }
  storeEquipoName(name){
  	sessionStorage.setItem('check_equipo', name);
	}
	storeTorneoName(name){
  	sessionStorage.setItem('check_torneo', name);
  }
  storeUserName(name){
  	sessionStorage.setItem('check_user', name);
  }

  componentDidMount() {
          setTimeout(() => this.setState({ isLoading: false }), 500);
          axios.get(consts.SERVER_URL+`users/1?`, {
    			params: {
					user_name: this.props.match.params.id
				}
			})
    		.then(res => {
        	const user = [res.data];
      		console.log(user)
    		this.setState({ user});

      })
      }


loqs3ea(){
	
		swal(
					"Calificacion recibida",
					"ni idea",
					"success"
					)
	
}

 render() {
    if(this.state.isLoading){
      console.log(this.state.calificacion)
    return (<div>
        {Example}
        </div>); // render the loading component
    }



    return (
    <div>
	{ this.state.user.map(user =>

	<div className="cont_2">
		<div className="container">
		  <div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/perfil.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-10">

			  	<div className="row">
          <div class="col-sm-4"><h1>{user.nombres}</h1></div>
          </div>


			  	<div className="row">
          <div class="col-sm-4"><h4>@{user.user_name}</h4></div>
          <div class="col-sm-4"><center><h5></h5></center> </div>
          <div class="col-sm-4"><center>
          <form className="rating" >
          <input type="radio" id="star5" name="raiting" value="5" onChange={event =>  this.setState({calificacion: "5"})} /><label class = "full" for="star5" title="5"></label>
          <input type="radio" id="star4half" name="rating" value="4 and a half"/><label class="half" for="star4half" title="4.5"></label>
          <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="4"></label>
          <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="3.5"></label>
          <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="3"></label>
          <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="2.5"></label>
          <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="2"></label>
          <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="1.5"></label>
          <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="1"></label>
          <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="0.5"></label>


        </form></center>



        <button onClick = {this.loqs3ea} className="btnstarts" >Calificar</button>

          </div>


		  		</div>


		  	</div>
		 	</div>
	  </div>






		<div className="container">
		  <ul className="nav nav-tabs">

		    <li className="active tablink"><a data-toggle="tab" href="#info">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#equip">Mis Equipos</a></li>
		  </ul>


<br></br><br></br>

		  <div className="tab-content">
		    <div id="info" className="tab-pane active">
		      <h3>Información</h3>
		    </div>
		    <div id="estat" className="tab-pane fade">
		      <h3>Estadisticas</h3>
		      	<Link to='/statistics'>
		  			<button className="btn">ver estadisticas</button>
		  		</Link>
		    </div>
		    <div id="equip" className="tab-pane fade">
		    	<h3>Mis equipos</h3>




		    { this.state.user[0].equipos.map(equipo =>

				<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{equipo.nombre}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-2">

								<Link to={`/equipo/${equipo.id}`}>
		  						<button className="btn btn-info prf-btn">Ver Equipo</button>

		  	    				</Link>
		  	    		</div>
		  	    	</div>
		  		</div>
		)}



		    </div>
		  </div>

		</div>
	</div>
		)}
	</div>



    )
  }

}
