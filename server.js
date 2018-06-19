const express = require('express');
const port =process.env.PORT || 3000;
var app = express();

app.get('/',(req,res) => {
// res.send('<h1>hello express!</h1>');

res.send({
	name: 'Navin',
	likes:['biking','cities']
});
});

app.use(express.static(__dirname + '/public'));
app.get('/about',(req,res) => {
	res.send('D:/internship/Training/WebContent');
});

app.listen(port,() =>{
	console.log(`server is up on port ${port}`);
});