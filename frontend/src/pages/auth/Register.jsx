import React, { useState } from 'react';
import { TiUserAddOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';

import styles from './auth.module.scss';

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <TiUserAddOutline size={35} color='#999' />
          </div>
          <h2>Register</h2>
          <form onSubmit={register}>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              value={name}
              onChange={handleInputChange}
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              required
              value={email}
              onChange={handleInputChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              required
              value={password}
              onChange={handleInputChange}
            />
            <input
              type='password'
              placeholder='Confirm  Password'
              name='password2'
              required
              value={password2}
              onChange={handleInputChange}
            />
            <button type='submit' className='--btn --btn-primary --btn-block'>
              Login
            </button>
          </form>
          <span className={styles.register}>
            <Link to='/'>Home</Link>
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to='/login'>Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
