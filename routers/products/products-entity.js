export class ProductEntity {
    products = [
        {
            id: 1,
            name: "Manzana",
        },
        {
            id: 2,
            name: "Pera",
        },
        {
            id: 3,
            name: "Limon",
        },
    ];

    // getAll

    getAll() {
        return this.products;
    }

    // get

    get(id) {
        return this.products.find((u) => u.id === id);
    }

    // create

    create(product) {
        const newProduct = { name: product.name, id: this.products.length + 1 };
        this.products.push(newProduct);
        return newProduct;
    }

    // update

    update(id, productData) {
        const newProducts = this.products.filter((u) => u.id !== id);

        const updated = { id: id, name: productData.name };
        newProducts.push(updated);

        this.products = newProducts;

        return updated;
    }
    // delete

    delete(id) {
        this.products = this.products.filter((u) => u.id !== id);
    }
}