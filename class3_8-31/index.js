// require the express framework / module
const express = require("express");



// create an express app
const app = express();

const port = 4000;

app.use(express.json());

let numb = 0;

app.put("/test", function(req, res){
    // this is where you decide what the function will do
    console.log('Put /test');
    res.json("Put Test back");
    
})

app.get("/test", function(req, res){
    console.log('Get /test');
    res.json("Get Test back");
})

/**
 * create 2 routes
 * 1 should be a post
 * 1 should be a get
 * 
 * in you index.js file, create a global variable that is set to 0
 * 
 * post / increment
 * i want you to increment you variable by 1
 * 
 * get / read
 * I want you to responc back with the variable
 */

// ********  if you use all for a verb the code will get exicuted

app.post("/increment", function(req, res){
    //console.log('Post /read')
    numb++;
    //console.log(numb)
    //res.json('Post read back');
    res.sendStatus(200);

})

/**
 * this is the GET  / read
 */
app.get("/read", function(req, res){
    console.log('Get /read');
    console.log('Get/Responding with', numb);
    res.json(numb);
})

// this endpoint, accepts a word, and returns back the all caps version of the word
// req: apple, response: APPLE
// the :word is like a place holder for req
// passing info on the path is called a path parameter
app.get("/caps/:word", function(req, res){
    console.log('GET/caps: ', req.params);
    let incomingWord = req.params.word;
    let upperWord = incomingWord.toLocaleUpperCase();
    res.json(upperWord);
})

// *********** another way to do the above

// you would use ?word=apples
// querry parameter
app.get("/otherCaps", function(req, res){
    console.log("GET /otherCaps", req.query);
    let incomingWord = req.query.word;
    let upperWord = incomingWord.toUpperCase();
    res.json(upperWord);
})

//***************  another way to do the above
// this will only work with put and post
// you would use
// request body json
app.post("/postCaps", function(req, res){
    console.log("POST /postCaps", req.body);
    let incomingWord = req.body.word;
    let upperWord = incomingWord.toUpperCase();
    res.json(upperWord);
})


app.listen(port, function(){
    console.log("Express server started on port ", port);
})



