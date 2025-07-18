import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="newsletter">
        <h2>Subscribe Our Newsletter</h2>
        <div className="subscribe">
          <input type="email" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

      
      <footer className="main-footer">
        {/* <div className="footer-container">

          <div className="footer-col">
            <h3 className="logo">🛒 Shopwise</h3>
            <p>
              If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text
            </p>
            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-google"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Location</li>
              <li>Affiliates</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Category</h4>
            <ul>
              <li>Men</li>
              <li>Woman</li>
              <li>Kids</li>
              <li>Best Seller</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>My Account</h4>
            <ul>
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><i className="bi bi-geo-alt"></i> 123 Street, Old Trafford, London, UK</li>
              <li><i className="bi bi-envelope"></i> info@sitename.com</li>
              <li><i className="bi bi-phone"></i> +457 789 789 65</li>
            </ul>
          </div>

        </div> */}

        {/* الأسفل */}
        <div className="bottom-footer">
          <p>© 2020 All Rights Reserved by Bestwebcreator</p>
          <div className="payments">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
