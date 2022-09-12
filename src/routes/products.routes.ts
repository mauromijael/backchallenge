import {Router, Request, Response} from "express";
import Product, { iProduct } from "../models/products";

const router: Router = Router();

router.get("/find", async (req: Request, res: Response)=>{
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error: any) {
        console.log(`Hubo un error: ${error}`);
    }
});

router.post("/create", async (req: Request, res: Response)=>{
    try {
        const data: iProduct = req.body;
        const newProduct = await new Product(data);
        await newProduct.save();
        res.json({
            status: true,
            data: newProduct
        })
    } catch (error: any) {
        console.log(`Hubo un error: ${error}`);
    }
});

router.put("/update/:id", async (req: Request, res: Response)=>{
    try {
        const update = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: true,
            mesage: "Update!",
            data: update
        })
    } catch (error: any) {
        console.log(`Hubo un error: ${error}`);
    }
});

router.delete("/delete/:id", async (req: Request, res: Response)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({
            status: true,
            mesage: "Delete!"
        })
    } catch (error: any) {
        console.log(`Hubo un error: ${error}`);
    }
});

export default router;