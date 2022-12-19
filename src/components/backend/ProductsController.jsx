import isEmpty from "is-empty";
import Swal from "sweetalert2";

import { getProducts } from "./ProductsServices";

class ProductsgController {
  static getAllProducts = async ({ title, setProducts, setLoading }) => {
    try {
      setLoading(true)
      const response = await getProducts();
      if (!isEmpty(response)) {
        if (!isEmpty(title)) {
          const newTite = title.replaceAll("-", " ");
          const result = response.filter(
            (e) => e.title.toLowerCase() === newTite
          );
          setTimeout(() => {
            setProducts(result);
            setLoading(false)
          }, 2000);
        }else{
          setProducts(response);
          setLoading(false)
        }
      }
      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title: "Oops... no se pudo obtener data",
        text: `${error}`,
      });
      setLoading(false)
      return false;
    }
  };
  static getProductById = async ({ id, setProducts, setLoading }) => {
    try {
      setLoading(true)
      const response = await getProducts();
      let data = {};
      response.forEach((element) => {
        element.data.forEach((element2) => {
          if (element2.id === id) {
            data = element2;
          }
        });
      });
      setTimeout(() => {
        setProducts(data);
        setLoading(false)
      }, 2000);
      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title: "Oops... no se pudo obtener data",
        text: `${error}`,
      });
      setLoading(false)
      return false;
    }
  };
}

export default ProductsgController;
