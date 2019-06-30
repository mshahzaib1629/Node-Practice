
const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World!!!");
})


// ================= PORT Listening ====================

// In Practical Development, port no. is assigned as environment variable, out side our node application, we read that port no. by using Global Object 
// 'process', its property env (environmental variable), and then telling which env we want to use, in this case PORT
// On run time, before executing the application, we have to set our port no. For that use: 'set PORT=5000' in cmd to set port no. 5000 for our node app
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening to Port: ${port}`));