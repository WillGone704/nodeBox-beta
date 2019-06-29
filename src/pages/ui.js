import React from "react"
import {Link} from 'gatsby'
import style from "./ui.module.scss"
import UiBar from "../components/uiBar"
import Post from "../components/post"

const Chat = () => (
<div className = {style.Chat}>
	<form>
		<textarea col = "100" row = "5"></textarea>
		<button>Send</button>
	</form>
</div>
)

const UserInfo = (props) => (
<section className = {style.userInfo}>
	<figure>
		<img alt = "usr--img-profile"/>
		<figcaption>
			<Link to = "/404/">{props.user}</Link>
		</figcaption>
	</figure>
	
	<div>
		<h5>Bio: </h5>
		<p>{props.bio}</p>
	</div>

	<div>
		<h5>Connections: </h5>
	</div>

	<div>
		<h5>Posts: </h5>
	</div>
	<button onClick = {props.showPosting}></button>
</section>
)

const Topics = (props) => (
<section className = {style.topics}>
	<h4>Topic that you might interested</h4>
	<div>
		{props.topic}
	</div>
</section>
)

const Persons = (props) => (
<section className = {style.persons}>
	<h4><Link to = "/persons/">Persons</Link> that you might interested</h4>
	<div>
		{props.persons}
	</div>
</section>
)

const Groups = (props) => (
<section className = {style.groups}>
	<h4><Link to = "/groups/">Groups</Link> that you migth interested</h4>
	<div>
		{props.groups}
	</div>
</section>
)

const Posting = (props) => (
<section className = {style.posting} style = {props.style}>
	<div>
		<div>
			<button onClick = {props.showPosting}>X</button>
		</div>
		
	</div>
</section>
)

const Wall = () => (
<section className = {style.wall}>
	<Post />
</section>
)

export default class UserInterface extends React.Component{ 
	constructor(props){
		super(props);
		this.state = {showPosting: false}
		this.showPosting = this.showPosting.bind(this);
	}
	showPosting(){
		const showPosting= this.state.showPosting;
        if(showPosting === true){
            this.setState({showPosting: false})
        }else{
            this.setState({showPosting: true})
		}
		console.log(showPosting)
	}
	render(){
		const showPosting = this.state.showPosting;
		return(
			<main className = {style.userInterface}>
				<UiBar/>
				<UserInfo 
				user = "Pablo Iglesias" 
				bio = "nacido en Georgia"
				showPosting = {this.showPosting}/>
				<Topics/>
				<Persons/>
				<Groups/>
				<Posting 
				style ={{display:(!showPosting ? 'none' : 'block')}}
				showPosting = {this.showPosting}/>
				<Wall/>
				<Chat/>
			</main>
		)
	}
}