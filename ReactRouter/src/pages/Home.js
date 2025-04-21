import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>This is my Web Page</h1>
      <p>
        <Link to="/products">Go to Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
