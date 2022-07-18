//const express = require('express');
import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

//const exphbs = require('express-handlebars');
//const path = require('path');
import * as path from "path";

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// set handlebar routes
app.get('/',  (req, res)=>{
	 res.render('home',{
		 stuff: 'this is stuff'
	 });
});


// set static folder
//app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server listening on port ' + PORT));
