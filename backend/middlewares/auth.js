import jwt from 'jsonwebtoken'
function authenticate(req,res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1];
        req.token = bearerToken

        jwt.verify(req.token, process.env.JWT_SECRET,(err,authData)=>{
            if(err){
                res.sendStatus(403)
            } else{
                req.user = authData
                next()
            }
           
        })
        
    }else{
        res.status(401).json({error: 'user not logged in'})
    }
}

 export {authenticate}