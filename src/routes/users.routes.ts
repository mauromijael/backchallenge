import {Router, Request, Response} from "express";
import User, { iUser } from "../models/users";

const router: Router = Router();

router.get("/login", async (req: Request, res: Response)=>{
    try {
        const user: iUser[] = await User.find({
            username: "challenge",
            password: "26f2afb0a84f611dfc15f68feadc815f794b3081db3c230e293787c5124ac1a4",
            active: true
        });
        res.json(user)
    } catch (error: any) {
        console.log(`Hubo un error: ${error}`);
    }
});


export default router;