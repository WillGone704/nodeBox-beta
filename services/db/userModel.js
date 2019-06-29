var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.Schema define the shape of the collection so
//we define a userSchema for the Post Collection
var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
})

//Now we defina our model 
var userCollection = mongoose.model('userCollection',userSchema);


//This function insert a new document into our collection
const insert = (insert) => {

    userCollection.insertMany(insert,
    (err,post) =>{
        if(err) return console.log(err);
        console.log(post);
    })
    userCollection.save()
}

//This function find the first document that match with the condition
const findOne = (condition,response) => {

    userCollection.findOne(condition,response,
    (err,results) =>{
        if (err) return handleError(err);
        console.log(results.owner)
    });
    userCollection.save()
}
//This function delete the first document matches the condition
const deleteOne = (condition) => {
    userCollection.deleteOne(condition,
        (err,results) => {
            if (err) return console.log(err);
            console.log(results);
        })
    userCollection.save()
}
//This function update the first document that macth with the filter
const updateOne = (filter,doc) => {
    userCollection.updateOne(filter,doc,
        (error,res)=>{
            if(error) return console.log(error);
            console.log(res);
        })
    userCollection.save()
}
//This function  replace the document that match with the filter
const replaceOne = (filter,doc) =>{
    userCollection.replaceOne(filter,doc,
        (error, res) => {
            if(error) return console.log(error);
            console.log(res);
        });
        userCollection.save()
}

exports = {insert,findOne,deleteOne,updateOne,replaceOne};