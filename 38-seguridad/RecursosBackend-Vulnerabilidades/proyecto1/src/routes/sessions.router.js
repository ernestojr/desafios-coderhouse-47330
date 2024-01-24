import { Router } from 'express';

const router = Router();

const users = [];

router.post('/register',(req,res)=>{
    const user = req.body;
    console.log(user); // A09-2021
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    users.push(user);// A03-2021 - A07-2021
    res.send({status:"success",payload:user})
})

export default router;