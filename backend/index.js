const express = require("express");
const app = express();

app.use(express.json())

const users = [
    {email : 'mannat@gmail.com', password : '123456'},
];

const port = 8080;

app.get('/', (req,res)=>{
    res.send('Hey user..!');
})

app.put('/user', async (req,res)=>{
    try{
        const {email, password}= req.body;
        for(let key in users){
            if(users[key].email == email){
                users[key]= {...users[key],...update};
                update= true;
                return res.send.status(200).json({
                    msg : 'user details updated',
                    success : true
                })
            }
            else{
                return res.status(400).json({
                    msg : 'Email not found',
                    success : false
                })
            }
        }
    }

    catch(err){
        res.status(500).json({
            msg : 'Internal server error', 
            err,
            success : false
        })
    }
})

app.delete('/delete', async (req,res)=>{
    try{
        const {email}= req.body;
        for(let key in users){
            if(users[key].email == email){
                delete users[key];
                delete true;
                return res.send.status(200).json({
                    msg : 'user details deleted',
                    success : true
                })
            }
            else{
                return res.status(400).json({
                    msg : 'Email not found',
                    success : false
                })
            }
        }
    }

    catch(err){
        res.status(500).json({
            msg : 'Internal server error', 
            err,
            success : false
        })
    }
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})