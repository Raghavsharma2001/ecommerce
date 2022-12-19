import "./category-preview.styles.scss";
import ProductCard from "../product-card/products-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  console.log(products);
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="nav-link" to={`${title}`}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;