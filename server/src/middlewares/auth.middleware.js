import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) =>{
    const token = req.cookies?.token;

    if(!token){
        return res.status(400).json({
            success: false,
            message: "Token not found/Unauthorized"
        })
    }

    const decoded = jwt.verify(token);

    req.user = decoded;

    next();
}