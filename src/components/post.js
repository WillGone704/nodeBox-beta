import React from 'react'
import style from '../components/post.module.scss'

//This Component it will show the header  and the content of our post
const HeaderContent = (props) => (
    <section className = {style.headerCon}>
        <div>
            <div>
                <h5>{props.title}</h5>
                <p>{props.date}</p>
                <p>{props.authors}</p>
            </div>
        </div>
        <hr/>
        <article>
            {props.markdown}
        </article>
    </section>
)

//This Component it will manage the comment Block
//It supposed to wotk like the standard comment block
// You will be able to comment and like/dislike other comments
const CommentBlock = (props) => (
    <section style = {props.style}>
        <textarea name="leaveComment" id="" cols="30" rows="10" placeholder = "Leave a Comment">
        </textarea><br/>
        <button>Comment</button>
        <section>
            <div>
                {props.username}<br/>
                {props.comment}
            </div>
        </section>
    </section>
)

/*This Manage all things related to our Post
The buttons to like and dislike. A comment block to
see all comments and make new comment.
Read the entire Post.
*/
export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 5,
            dislikes: 4,
            comments: 100,
            displayComment: false,
        }
        this.countLikes = this.countLikes.bind(this)
        this.countDislikes = this.countDislikes.bind(this)
        this.showComment = this.showComment.bind(this)
        
    }

    countLikes(){
        if( this.state.likes === 5){
            this.setState({likes: this.state.likes + 1})
        }else{alert("You aren't able to vote!!");}
    }

    countDislikes(){
        if( this.state.dislikes === 4){
            this.setState({likes: this.state.dislikes + 1})
        }else{alert("You aren't able to vote!!");}
    }

    showComment(){
        const displayComment= this.state.displayComment;
        if(displayComment === true){
            this.setState({displayComment: false})
        }else{
            this.setState({displayComment: true})
        }

    }

    render(){
        const displayComment = this.state.displayComment;
        return(
            <section>

                <HeaderContent
                title = "Soy UN  Titulo" 
	            date = "12-08-19"
	            authors = "Unknown"
	            markdown = "Soy un texto de prueba"/>
                <hr/>
                <div className = {style.buttonBoard}>
                    <button onClick = {this.countLikes}>like </button> {this.state.likes}
                    <button onClick = {this.countDislikes}>dislike </button> {this.state.dislikes}
                    <button onClick = {this.showComment}>comment </button> {this.state.comments}
                    
                </div>
                {<CommentBlock
                style = {{display:(!displayComment ? 'none' : 'block')}}
                username = "JonhBoy"
                comment = "Oh that's amazing!!"/>}

            </section>
        );
        
    }
}