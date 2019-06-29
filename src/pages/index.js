import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import style from "./index.module.scss"

import {ApolloClient,gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const ADD_USER = gql`
  mutation  addUser($username: String!, $email: String!, $password: String!){
    username
    email
  }
`
const Login = () =>{
  let input = {
    "username": "",
    "password": "",
    "email": "",
  }
  // eslint-disable-next-line
  (
  <section>
    <Mutation mutation = {ADD_USER} onError = {error => (console.log(error))} >
      {(addUser , {data,error}) => (

          <section>
            <form onSubmit = {e => {
              e.preventDefault();
              addUser({variables: {
                username: input.username,
                password: input.password,
                email: input.email,
                }});
              input.username = ""
              input.password = ""
              input.email = ""
            }}>

              <label>Username: <input type = "text" name = "username" placeholder = "Username"
              ref = {node => {input = node}}/></label>
      
              <label>Password: <input type = "password" name = "usrpassword" placeholder = "*******************"/></label><br/>
              <input type = "checkbox" name = "remenberme"/><label>Remember Me</label>
      
              <button type = "submit">LogIn</button><Link to = "/sigin/">SigIn</Link>
            </form>
            
            <div>
            {error && <p>Error ,Please try again</p>}
            </div>
          
          </section>

        )
      }
    </Mutation>
  </section>
  )
}

const IndexPage = () => (
  <div className = {style.Main}>
    <Layout.menu/>
    <h1>A Descentralize Social Network</h1>
    <Login/>
    <Layout.footer/>
  </div>
)

export default IndexPage
