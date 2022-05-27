const app = require("express").Router()
let db= require("../db/db.json")
const fs= require("fs")
const { title } = require("process")
const req = require("express/lib/request")

app.get("/api/notes", function(req,res){
    db = JSON.parse(fs.readFileSync("db/db.json")) || []
    console.log("GET",db)
    res.json(db)
})

app.post("/api/notes", function(req,res){
    var newnote = {
        id: Math.floor(Math.random()*999),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newnote)
   fs.writeFileSync("db/db.json", JSON.stringify(db), function(err){
       if(err) throw err;
   })
    console.log("POST",db)
    res.json(db)
})

app.delete("/api/notes/:id", function(req,res){
    var notDeleted = []
    for(let i =0; i< db.length; i++){
        if(db[i].id !=req.params.id){
            notDeleted.push(db[i])
        }
    }
    db = notDeleted;
   fs.writeFileSync("db/db.json", JSON.stringify(db), function(err){
       if(err) throw err;
   })
    console.log("POST",db)
    res.json(db)
})



module.exports= app