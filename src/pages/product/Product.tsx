import Single from "../../components/single/Single";
import { allProducts } from "../../data";
import "./product.scss";

const Product = () => {
  return (
    <div className="product">
       <Single data={allProducts} />
    </div>
  )
}

export default Product
