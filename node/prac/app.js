import  Express  from "express"


const app = Express();

//app.use(Express.json());
app.use(Express.urlencoded({extended:true}));



app.post("/post",(req,res)=>{

    console.log(req.body);
    res.send(req.body)
}
)







app.get("/",(req,res)=>{

    res.send("hello")
})



app.listen(3000, () => {   

    console.log("Server is running on port 3000");
    
});













//import birds from "./bird.js"
//app.use('/birds', birds)

//route chaining
// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })

