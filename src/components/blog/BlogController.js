import isEmpty from "is-empty";
import React from "react";
import Swal from 'sweetalert2'

import { getPost } from "./BlogServices";

class BlogController {
  static getAllPost = async () => {
    try {
      const response = await getPost();
      if (!isEmpty(response)) {
        return response;
      }
    } catch (error) {
        Swal.fire({
            icon: "error",
            showConfirmButton: false,
            title: "Oops... no se pudo obtener data",
            text: `${error}`,
          });
    }
  };
}

export default BlogController;
