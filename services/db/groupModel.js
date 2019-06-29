var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.Schema define the shape of the collection so
//we define a groupSchema for the Post Collection

var groupSchema = new Schema({
    username: String,
    password: String,
    email: String,
})

//Now we defina our model 
var groupCollection = mongoose.model('groupCollection',groupSchema);

//This function insert a new document innto our collection
const insert = (insert) => {
    groupCollection.insertMany(insert,
    (err,post) =>{
        if(err) return console.log(err);
        console.log(post);
    })
    groupCollection.save()
}

//This function find only the first document that match with the condition
const findOne = (condition,response) => {

    groupCollection.findOne(condition,response,
    (err,results) =>{
        if (err) return handleError(err);
        console.log(results.owner)
    });
    groupCollection.save()
}

//This function delete the first document matches the condition
const deleteOne = (condition) => {

    groupCollection.deleteOne(condition,
        (err,results) => {
            if (err) return console.log(err);
            console.log(results);
        })
    groupCollection.save()
}

//This function update the first document that macth with the filter
const updateOne = (filter,doc) => {
    groupCollection.updateOne(filter,doc,
        (error,res)=>{
            if(error) return console.log(error);
            console.log(res);
        })
    groupCollection.save()
}

//This function replace the first document that match with the filter
const replaceOne = (filter,doc) =>{
    groupCollection.replaceOne(filter,doc,
        (error, res) => {
            if(error) return console.log(error);
            console.log(res);
        });
        groupCollection.save()
}

exports = {insert,findOne,deleteOne,updateOne,replaceOne}