import products from "../data/products.json";
import { Link } from "react-router-dom";

function ProductsPage() {
    return (
        <>
            <h1>Products Page</h1>
            <p>Check out our many products below:</p>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default ProductsPage;