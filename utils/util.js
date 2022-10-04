import jwt from "jsonwebtoken"

export const generateToken = (id) => {
        return jwt.sign({id},"cashmo0injbuyhuygvgv87fyuhjunjkjhjh",{
            expiresIn : '30d'
        })
}