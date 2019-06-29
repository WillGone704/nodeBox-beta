var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.Schema define the shape of the collection so
//we define a PostSchema for the Post Collection
var postSchema = new Schema({
    postTitle: String,
    owner: Array,
    content: String,
})

//Now we defina our model 
var postCollection = mongoose.model('postCollection',postSchema);

//This function insert a new document into our collection
const insert = (insert) => {
    postCollection.insertMany(insert,
    (err,post) =>{
        if(err) return console.log(err);
        console.log(post);
    })
    postCollection.save()
}

//This function find the first document that match with the condution
const findOne = (condition,response) => {

    postCollection.findOne(condition,response,
    (err,results) =>{
        if (err) return handleError(err);
        console.log(results.owner)
    });
    postCollection.save()
}
//This function delete the first document matches the condition
const deleteOne = (condition) => {
    postCollection.deleteOne(condition,
        (err,results) => {
            if (err) return console.log(err);
            console.log(results);
        })
    postCollection.save()
}
//This function update the first document that macth with the filter
const updateOne = (filter,doc) => {
    postCollection.updateOne(filter,doc,
        (error,res)=>{
            if(error) return console.log(error);
            console.log(res);
        })
    postCollection.save()
}

//This function replace the first document that match with the filter
const replaceOne = (filter,doc) =>{
    postCollection.replaceOne(filter,doc,
        (error, res) => {
            if(error) return console.log(error);
            console.log(res);
        });
        postCollection.save()
}

exports = {insert,findOne,deleteOne,updateOne,replaceOne}