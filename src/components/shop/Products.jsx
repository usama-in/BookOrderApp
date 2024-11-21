import React from "react";
import classes from "./product.module.css";
import ProductItem from "./ProductItem";

const DUMMY_CART = [
  {
    id: "p1",
    title: "book 1",
    price: 3000,
    description: "new book with latest incidents",
  },
  {
    id: "p2",
    title: "book 2",
    price: 2000,
    description: "everything happened last century",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>buy your favorite products</h2>
      <ul>
        {DUMMY_CART.map((item) => (
          <ProductItem
          key = {item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
