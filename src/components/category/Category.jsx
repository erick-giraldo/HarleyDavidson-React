import React, { useEffect, useState } from "react";
import ProductsController from "../backend/ProductsController";
import "../../assets/scss/index.scss";
import { Link, useParams } from "react-router-dom";
import isEmpty from "is-empty";
import CircularProgress from '@mui/material/CircularProgress';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    if (!isEmpty(id)) {
      ProductsController.getAllProducts({
        title: id,
        setProducts,
        setLoading
      });
    }
  }, [id]);

  const listItem = (array) => {
    return array.map((e) => (
      <>
        <div
          className="card col-lg-2 col-md-6 col-sm-12"
          style={{ width: "20rem" }}
        >
          <img src={e.image} className="d-block w-100" alt={e.name} />
          <div className="card-body">
            <h5 className="card-title card-name">{e.name}</h5>
            <p className="card-text">{e.description}</p>
            <div className="card-inv">
              <p className="card-title card-price">$ {e.price}</p>
              <p className="card-title card-stock">Stock: {e.stock}</p>
            </div>
            <Link
              type="button"
              className="btn btn-outline-dark"
              to={`/item/${e.id}`}
            >
              Ver Detalles
            </Link>
          </div>
        </div>
      </>
    ));
  };

  const listProducts = (items) => {
    return (
      <div>
        <h1>Categorías</h1>
        <div className="productos-container">
          {items.map((products) => (
            <div>
              <p className="p-titulo">{products.title}</p>
              <p>Descubre algunos de los modelos más recientes.</p>
              <div className="row productos-section">
                {listItem(products.data)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="card-container m-scrl">{listProducts(products)}</div>
      )}
    </>
  );
};

export default Category;
