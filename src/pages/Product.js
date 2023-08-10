import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductPage() {
  return (
    <>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
      <h1>Product Page !!!</h1>
      <ul>
        {PRODUCTS.map((products) => (
          <li key={products.id}>
            <Link to={products.id} relative="path">
              {products.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductPage;
