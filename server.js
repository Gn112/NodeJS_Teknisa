const express = require("express");
const bodyParser = require("body-parser");
const programmer = require("./database/tables/programmer");

const app = express();
const port = 4002;

app.use(bodyParser.json());

app.get("syncDatabase", async(req, res) => {
  const database = require("./dabase/db");

  try {
    await database.sync();

    res.send("Database sucessfully sync");

  } catch (error) {
    res.send(error);
  }
});

app.post('/createProgrammer', async(req, res) => {
    try {
        const params = req.body;

        const properties = ['name', 'javascript', 'java', 'php'];

        const check = properties.every((property) => {
            return property in params;
        });

        if(!check){
            const propStr = properties.join(', ');
            res.send('All parameters needed to create a programmer must be sent ${propStr}');
            return;
        }

        const newProgrammer = await programmer.create({
            name: params.name,
            javascript: params.javascript,
            java: params.java,
            php: params.php
        });

        res.send(newProgrammer)
    }catch (error){
        res.send(error);
    }
})

app.post('/retrieveProgrammer',  async (req, res) => {
    try {
        const params = req.body;

        if(record){
            res.send(record);
        }else {
            res.send('No programmer found')
        }

        
    }catch {
        res.send(error);
    }
})

app.listen(port, () => {
  console.log("Now listening on port ${port}");
});
