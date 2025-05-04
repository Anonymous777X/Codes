import jwt from 'jsonwebtoken';

 export function isauthenticated (req, res, next) {
 let token = req.cookies.jwt;
 if (token) {
     jwt.verify(token, 'my-secret-key', (err, decoded) => {
         if (err) {
             console.log(err);
             res.status(401).json({message: 'Invalid token, please login'});
             res.redirect('/login');
         } else {
             req.curruser = decoded.id;
             next();
         }
     }  );  
}
else {
     res.status(401).json({message: 'Unauthorized, please login'});
     res.redirect('/login');
 }
};