const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const friends = require("./model/friends")



app.get('/', (req,res) => {
    res.send(`HELLO FRIENDS`);

});

app.get("/friends", (req, res) => {
    res.render("../view/index.ejs", {
      friendsList: friends
    });
});
  
app.get("/friends/:id", (req, res) => {
    res.render("../view/show.ejs", {
        displayFriend: friends[req.params.id]
    });
});


app.listen(port, () => {
    console.log(`Friends app is litening on port: ${port}`);
});