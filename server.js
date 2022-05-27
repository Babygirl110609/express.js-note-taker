const express= require("express") 
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}) //req.body 










app.listen(PORT,function(){
  console.log("App is running on",PORT)
})
