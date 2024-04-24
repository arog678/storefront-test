import { useEffect, useState } from "react";
import { ProductType } from "../types/productTypes";
import { formatProductData } from "../utils/formatProductData";

export const PRODUCT_URL = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product';

export const useProductData = () => {

    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        fetch(PRODUCT_URL, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            const formattedData = formatProductData(data);
            setProduct(formattedData);
          })
          .catch((error) => console.error(error));
      }, []);

      return {product};
    };