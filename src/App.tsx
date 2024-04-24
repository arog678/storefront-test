import './App.css';
import { ProductMain } from './components/product/ProductMain';
import { PageHeaderMain } from './components/pageHeader/PageHeaderMain';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from './app.styled';
import { useProductData } from './hooks/useProductData';

function App() {

  const {product} = useProductData()

  return (
    <S.AppStyled>
      <ToastContainer />
      <CartProvider product={product}>

          <PageHeaderMain/>    
          {product && 
            <ProductMain 
                product={product}
            />
          }
      </CartProvider>
    </S.AppStyled>
  );
}


export default App;
