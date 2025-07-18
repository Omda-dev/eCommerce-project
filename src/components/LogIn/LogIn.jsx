import  { useState } from 'react';
import './login.css';

function LogIn({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  // Fake success response
  if (email === 'admin@example.com' && password === '12345678') {
    onLogin('fake-token-12345');
  } else {
    setError('Invalid credentials');
  }
};

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type='submit' className='login-btn'>Login</button>
    </form>
  );
}

export default LogIn;
