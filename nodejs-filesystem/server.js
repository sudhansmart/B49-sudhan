const express = require('express');
const fs = require('fs');
const pathModule = require('path');
const send = require('send');
const app = express();
const outputFolder = './output';
   console.log("file found:",fs.existsSync(outputFolder));
const PORT=3500;
 if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
 };

 app.get('/createfile',(req,res)=>{
    const currentTime = new Date();
    const year = currentTime.getFullYear().toString();
    const month = (currentTime.getMonth()+1).toString();
    const date = currentTime.getDate().toString();
    const hours = currentTime.getHours().toString();
    const mins = currentTime.getMinutes().toString();
    const sec=currentTime.getSeconds().toString();

    const fileName=`${year}-${month}-${date}-${hours}-${mins}-${sec}.txt`;
    const filePath = pathModule.join(outputFolder,fileName);
    fs.writeFile(filePath,currentTime.toISOString(),(err)=>{
        if(err){
            console.error("error found in writing file",err);
            res.send(500).send("Error writing File");
        }
        else{
            console.log("File Created",filePath);
            res.status(200).send("File Created")
        }
    });
});
      app.get('/getfiles',(req,res)=> {
        fs.readdir(outputFolder,(err,files)=>{
            if(err){
                res.send(500).send("Error Reading File"); 
            }else{
            console.log("files :",files);
            const  textFiles = files.filter((file)=>pathModule.extname(file)=== ".txt");
            res.json(textFiles);
            }
        })
      })


app.listen(PORT,()=>{
    console.log("server running at Port NO",PORT)
});