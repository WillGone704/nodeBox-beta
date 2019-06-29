import React from 'react'
import {Link} from 'gatsby'
import style from './userProfile.module.scss'

const Wallpaper = () => (
<header className = {style.wallpaper}>
	<p>Soy un texto de prueba</p>
</header>
)

const Avatar = (props) => (
<figure className = {style.avatar}>

	<button>Change your profile</button>
	<img alt = "avatar" src = {props.avatarImage}/>
	<button onClick = {props.openContainer}>Change your Username</button>

	<figcaption>

		{props.username}

	</figcaption>

	<div style = {props.showUsernameEdit}>

		<input type = 'text' name = "username"/><br/>
		<button onClick = {props.applyChange}>Apply</button>

	</div>

	<div>
		
		<p>You Don't have an external links. Add ones</p>
		<button onClick = {props.openContainer}>Add</button>
		{props.externalLinks}

		<section style = {props.showLinksEdit}>

			<input type = "text" name = "externalLinks" /><br/>
			<button onClick = {props.applyChange}>Apply</button>

		</section>
	</div>

</figure>
)

const Bio = (props) => (
<div className = {style.bio}>

	<h4>Bio:</h4>
	<button onClick = {props.openContainer}>Edit</button>
	{props.bio}

	<div style = {props.showBioEdit}>

		<textarea></textarea><br/>
		<button onClick = {props.applyChange}>Apply</button>

	</div>

</div>
)

const Topic = (props) => (
<section className = {style.topic}>

	<h4>Topic that you are insterested:</h4>
	<button onClick = {props.openContainer}>Edit</button>
	{props.topic}

	<div style = {props.showTopicEdit}>

		<input type = 'text' name = "topics"/><br/>
		<button onClick = {props.applyChange}>Apply</button>

	</div>
</section>
)
const Post = (props) => (
<section className = {style.post}>

	<h4>Posts:</h4>

	<p>You have 
		<b>{props.postNum}</b>
	 Posts</p>

</section>
)

const Groups = (props) => (
<section className = {style.group}>

	<h4>Your Groups</h4>
	{props.groups}

</section>
)

export default class UserProfile  extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			showBioEdit: false,
			showUsernameEdit: false,
			showTopicEdit: false,
			showProfileEdit: false,
			showHeaderEdit: false,
			bio: "",
			username: "",
			topic: ["webdev","yoga"]
		}

		this.openContainer = this.openContainer.bind(this);
		this.applyChange = this.applyChange.bind(this)
	}

	openContainer(){
	}

	applyChange(){

	}

	render(){
		const showBioEdit= this.state.showBioEdit;
		const showUsernameEdit= this.state.showUsernameEdit;
		const showTopicEdit= this.state.showTopicEdit;
		return(
			<main className = {style.userProfile}>
				<Wallpaper/>

				<Link 
				to = "" 
				className = {style.backButton}>Back
				</Link>
				
				<Avatar 
				username = "Pablo Iglesia"
				showUsernameEdit = {{showUsernameEdit:(!showUsernameEdit ? 'none' : 'block')}}
				applyChange = {this.applyChange()}/>
				<Bio
				showBioEdit = {{showBioEdit:(!showBioEdit ? 'none' : 'block')}}
				openContainer = {this.openContainer}/>
				<Topic
				showTopicEdit = {{showTopicEdit:(!showTopicEdit ? 'none' : 'block')}}/>
				<Post/>
				<Groups/>
			</main>
		)
	}
}
