import { ProductAddToCartButton } from "./productAddToCartButton/ProductAddToCartButton";
import { ProductDescription } from "./productDescription/ProductDescription";
import { ProductPrice } from "./productPrice/ProductPrice";
import { ProductSize } from "./productSizeSelect/ProductSize";
import { ProductTitle } from "./productTitle/ProductTitle";
import * as S from './productMain.styled';
import { ProductType } from "../../types/productTypes";
import { ProductImage } from "./productImage/ProductImage";

interface ProductMainProps {
    product: ProductType;
};

export const ProductMain = ({
    product
}: ProductMainProps) => {

    // It is beyond the scope of this project 
    // but ideally a skeleton would be put here

    return (
        <S.ProductContainer>
            <ProductImage 
                productImage={{
                    src: product.imageURL,
                    alt: product.title,
                }}
            />

            <S.ProductInfo>
                <ProductTitle 
                    title={product.title}
                />

                <ProductPrice
                    price={product.price}
                />

                <ProductDescription 
                    description={product.description}
                />

                <ProductSize
                    sizeOptions={product.sizeOptions}
                />

                <ProductAddToCartButton />
            </S.ProductInfo>

        </S.ProductContainer>
    );
};