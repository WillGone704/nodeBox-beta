const {gql} = require ('apollo-server-express');

const typeDefs = gql`
    type User {
        "User Basic Profile"
        id: ID!
        email: String!
        username: String!
        password: String!
    }
    
    type Post {
        "Parameters to fetch post from the Database"
        id: ID!
        postTitle: String!
        content: String!
        like: Int!
        dislike: Int!
        author: User
    }
    
    type Group {
        "Parameters to fetch groups from the Database"
        idGroup: ID!
        groupName: String!
        members: [User]
        founder: User
    }

    type Query{
        """
        This Query fetch all posts on the database
        """
        getPosts(id: ID!): [Post]
        """
        This Query fetch all groups on the database
        """
        getGroups(id: ID!): [Group]
    }

    type Mutation {
        "Mutattion modified or created new username on the database"
        addUser(username: String!, email: String!, password: String!): User
        "Mutattion modified or created new  post on the database"
        createPost(Post: PostAndMediaInput): Post
    }
    input PostAndMediaInput {
        postTitle: String!
        author: String!
        date: String!
        content: String!
    }


`

module.exports = typeDefs;