import { Router } from "express";
import { middlewareCustom } from "../../middlewares/middlewareCustom.js";
import {
    CreateProducts,
    DeleteProduct,
    GetAllProducts,
    UpdateProduct,
} from "./products-controller.js";

const productsRouter = Router();

productsRouter.get("/", [middlewareCustom], GetAllProducts);

productsRouter.post("/", CreateProducts);

//  [Patch] localhost:8000/users/2
productsRouter.patch("/:id", UpdateProduct);
//  [DELETE] localhost:8000/users/2
productsRouter.delete("/:id", DeleteProduct);

export default productsRouter;