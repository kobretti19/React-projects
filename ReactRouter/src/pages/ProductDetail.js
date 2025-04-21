import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetail;
