import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_data = [
  {
    id: "p1",
    price: 30,
    title: "My First Book",
    description: "The First book I ever wrote",
  },
  {
    id: "p2",
    price: 30,
    title: "My Second Book",
    description: "The Second book I ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((product) =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
