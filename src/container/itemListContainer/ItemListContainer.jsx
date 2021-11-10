import React, { useState, useEffect } from "react";
import ItemList from "../../componets/itemList/ItemList";
import "./ItemListContainer.css";
import Spinner from "../../componets/spinner/Spinner";
import { useParams } from "react-router";
import { GetProducts } from "../../firebase/getProducts";

const ItemListContainer = () => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
      GetProducts(
        setMessage,
        setIsSuccess,
        setIsFinished,
        setIsLoading,
        setProducts,
        categoryId,
      );
  }, [products]);

  return (
    <div>
      {(categoryId) ? <h1>Ctegoria: {categoryId}</h1> : <h1>Lista de productos</h1>}
      <h3 className={isSuccess ? "successMessage" : "successError"}>
        {message}
      </h3>
      {isLoading && <Spinner />}
      <div className="custom-container">
        <ItemList products={products}></ItemList>
      </div>
    </div>
  );
};

export default ItemListContainer;
