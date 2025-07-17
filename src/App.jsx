import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import LogIn from './components/LogIn/LogIn';
import Cart from './components/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const isLoggedIn = !!token;

  const handleLogin = (token) => {
    setToken(token);
    setShowLoginModal(false);
  };

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const toggleCartModal = () => setShowCartModal(!showCartModal);

  const addToCart = (product) => {
    if (!isLoggedIn) return openLoginModal();

    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <NavBar
        cart={cart}
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        toggleCartModal={toggleCartModal}
        username={isLoggedIn ? 'Emad' : null}
      />

      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route
            path='/'
            element={<Home addToCart={addToCart} openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path='/AboutUs'
            element={<AboutUs openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path='/Products'
            element={<Products addToCart={addToCart} openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path='/product/:id'
            element={<ProductDetails addToCart={addToCart} openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} />}
          />
        </Routes>
        <Footer />
      </div>

      {showLoginModal && (
        <div className="modal-backdrop" onClick={closeLoginModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLoginModal}>×</button>
            <LogIn onLogin={handleLogin} />
          </div>
        </div>
      )}

      {showCartModal && (
        <div className="modal-backdrop" onClick={toggleCartModal}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <Cart cart={cart} setCart={setCart} closeCart={toggleCartModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
