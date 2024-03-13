import express from "express";
import mockData from './data/mock.json' assert  {type:"json"}; // Corrected import statement

const app = express();

app.use(express.static("public"));
app.use('/images', express.static('images'));

//middleware function
// app.use((req, res, next) => {
//     console.log("Time:", Date.now());
    
//     next();
// });

app.get("/", (req, res) => {
    res.json(mockData);
});

app.get("/class/:id", (req, res) => {
    const studentId = Number(req.params.id);
    console.log("Requested student ID:", studentId);
    
    if (!isNaN(studentId)) {
        const student = mockData.find(item => item.id === studentId); // Using find() instead of filter() to find a single student
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } else {
        res.status(400).json({ error: 'Invalid student ID' });
    }
});



// app.post("/about", (req, res) => {
//     res.send("Hello World in post");
// });

// app.put("/put", (req, res) => {
//     res.send("Hello World in put");
// });

// app.delete("/delete", (req, res) => {
//     res.send("Hello World in delete");
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
