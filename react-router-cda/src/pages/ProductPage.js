import { useParams, Navigate } from "react-router-dom";
import products from "../data/products.json";


function ProductPage() {
    const { productId } = useParams();

    const foundProduct = products.find((product) => {
        return product.id === productId;
    })

    if (!foundProduct) {
        return <Navigate to={`/products`} />
    }
    return (
        <>
            <h1>
                {foundProduct.name} {foundProduct.icon}
            </h1>
            <p>{foundProduct.description}</p>
            <p>Product ID: {foundProduct.id}</p>
            <p>Category: {foundProduct.category}</p>
            <p>Technical Specifications: {foundProduct.technicalSpecs}</p>
        </>
    );
}

export default ProductPage;