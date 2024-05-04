const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const Clientcon1=require('./contact');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  app.post('/contact', async (req, res) => {
    try {
      const clientcon = req.body;
      const newClient = new Clientcon1(clientcon);
      await newClient.save();
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

  app.use((req, res) => {
    res.status(404).send("404 Not Found");
  });
  
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });