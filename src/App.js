import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import { CartContext } from './CartContext';
import { useState } from 'react';

function App() {

  const [cartItems,setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems,setCartItems}}>
        <Link to ="/">首頁</Link>
        <Link to ="/checkout">購物車</Link>


          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            
            <Route path='/product' element={<ProductDetail/>}>
              <Route path=':id' element={<ProductDetail/>}/>
              </Route>

            <Route path='*' element={<p>找不到頁面</p>}/>
          </Routes>

      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
