const {find} = require("graphql-tools")

//this object simulate our Collection
const posts = [{
    id: 1,
    postTitle: "Test Title",
    content: "Im a test",
    like: 39,
    dislike: 400,
    author:{
        id:1,
        username: "Pablo",
        password: "test",
        email: "pablo@gmail.com"
    }
}
]
//this resolver it supposed to grap the data inside posts
//But,It doesn't function
//I'm trying to learn how really this work to fix it
const resolvers = {
    Query: {
        getPosts(_, {args}){
            return find(posts,{id:args.id})
        },
    },

}

module.exports = resolvers;