import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'


export default class SigIn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "Pedro",
			usrpass: "",
			usremail: "",
			term: true,
			privacy: true
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.checkTerm=this.checkTerm.bind(this);
	}

	checkTerm = (event) => {
		const privacy = event.target.name= "privacy";
		const term = event.target.name= "term";
		this.setState({
			[privacy]:!this.state.privacy
		});
		if(!term.checked){
			this.setState()
		}
	}

	handleInputChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		this.setState({[name]:value})
	}

handleSubmit = (event) => {
	event.preventDefault()
	
}

componentDidMount(){

}

shouldComponentUpdate(nextState){
	if(this.state.username !== nextState.username){
		return true
	}
	if(this.state.usrpass !== nextState.usrpass){
		return true
	}
}

componentWillUnmount(){
	console.log('final de ciclo de vida!!')
}

render(){
	return(
		<div>
			<Layout.menu/>
		<form onSubmit = {this.handleSubmit}>
			<InputData
				label = "Username :"
				name = "username"
				type = "text"
				placeholder = "John Doe"
				handleChange = {this.handleInputChange}

			/>

			<InputData
				label = "Password :"
				name = "usrpass"
				type = "password"
				placeholder = "johndoe"
				handleChange = {this.handleInputChange}

			/>
			<InputData
				label = "E-Mail :"
				name = "usremail"
				type = "email"
				placeholder = "johnD@example.com"
				handleChange = {this.handleInputChange}

			/>

			<input type = "checkbox" name = "term" onChange={this.checkTerm} 
			checked = {this.state.term} required/>
			<label>Terminos y Condiciones</label><br/>

			<input type = "checkbox" name = "privacy" onChange={this.checkTerm} 
			checked = {this.state.privacy}required/>
			<label>Politica de Privacidad</label><br/>
		
			<button>SigIn</button>
		</form>
		<Link to = "/accesGranted/">--></Link>
		<Layout.footer />
</div>
	)
}
}

const InputData = props => {
return (
	<div>
		<label>{props.label}</label><br/>
		<input 
			name = {props.name} 
			type = {props.type} 
			placeholder = {props.placeholder}
			onChange = {props.handleChange}
			required
		/><br/>
	</div>
)
}