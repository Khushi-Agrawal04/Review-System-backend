import usermodel from '../model/user.js'; 


export const isAdmin =async(req,res, next) => {
    try {
        const{email} =req.body;
        const userinfo = await usermodel.findOne({email})

        if(userinfo && userinfo.role == "Admin") {
            next();
        }
        else {
            res.status(403).json({message:"Access Denied, only Admin can add comapanies"})  

        }
        } catch(error) {
            res.status(500).json({ message: "Error verifying user role", error }); 
    }
}

export const isStudent =async(req,res, next) => {
    try {
        const{email} =req.body;
        const userinfo = await usermodel.findOne({email})

        if(userinfo && userinfo.role == "Admin") {
            next();
        }
        else {
            res.status(403).json({message:"Access Denied, only Admin can add comapanies"})  

        }
        } catch(error) {
            res.status(500).json({ message: "Error verifying user role", error }); 
    }
}