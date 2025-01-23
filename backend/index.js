const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static('assets'));
const godFilePath = path.join(__dirname, 'data.json');
const monsterFilePath = path.join(__dirname, 'monster.json');
const placeFilePath = path.join(__dirname, 'places.json');
const weaponFilePath = path.join(__dirname, 'weapons.json');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api/getCharacters', (req, res) => {
  fs.readFile(godFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data file' });
      return;
    }
    res.json(JSON.parse(data)); 
  });
});

app.get('/api/getMonsters', (req, res) => {
  fs.readFile(monsterFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data file' });
      return;
    }
    res.json(JSON.parse(data)); 
    
  });
});

app.get('/api/getPlaces', (req, res) => {
  fs.readFile(placeFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data file' });
      return;
    }
    res.json(JSON.parse(data)); 
    
  });
});

app.get('/api/getWeapons', (req, res) => {
  fs.readFile(weaponFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data file' });
      return;
    }
    res.json(JSON.parse(data)); 
    
  });
});



app.listen(port, () => {
  console.log(`ServerOn for GreekGeeks`);
});