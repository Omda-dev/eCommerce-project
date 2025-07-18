import './Cart.css';

function Cart({ cart, setCart, closeCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={(e) => { e.stopPropagation(); closeCart(); }}>×</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image_path} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="cart-actions">
                  <button onClick={(e) => { e.stopPropagation(); decreaseQuantity(item.id); }}>-</button>
                  <button onClick={(e) => { e.stopPropagation(); increaseQuantity(item.id); }}>+</button>
                  <button onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
