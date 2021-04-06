import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_TOKEN = process.env.JWT_TOKEN || "";
//console.log(JWT_TOKEN);

const auth = async (req,res,next) => {
    try {
        
        const token = req?.headers?.authorization?.split(" ")[1];

        let decodedData;
        // console.log("Auth");
        // console.log(token);

        if(token){
            decodedData = jwt.verify(token , JWT_TOKEN);
            req.userId = decodedData?.id
        }

        next();

    } catch (error) {
        console.log(error.message);
    }
}
export default auth;