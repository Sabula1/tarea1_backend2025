import { ProductEntity } from "./products-entity.js";

const productEntity = new UserEntity();

export const GetAllProducts = (req, res) => {
    const products = productEntity.getAll();

    return res.json({
        data: products,
    });
};

export const CreateProducts = (req, res) => {
    const product = req.body;

    const newProduct = productEntity.create(product);

    return res.json({
        data: newProduct,
    });
};

export const UpdateProduct = (req, res) => {
    const { id } = req.params;
    const productData = req.body;

    const updatedProduct = productEntity.update(+id, productData);

    res.json({
        data: updatedProduct,
    });
};
export const DeleteProduct = (req, res) => {
    const { id } = req.params;

    productEntity.delete(+id);

    res.json({
        data: {
            message: "Eliminado producto con id: " + id,
        },
    });
};