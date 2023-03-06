import React, { useState } from 'react';
import { TiUserAddOutline } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import { registerUser, validateEmail } from '../../services/authService';
import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';

import styles from './auth.module.scss';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const register = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error('All fields are required');
    }

    if (!validateEmail(email)) {
      return toast.error('Please enetr a valid email');
    }

    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters');
    }

    if (password !== password2) {
      return toast.error('Passwords do not match');
    }

    const userData = { name, email, password };

    setIsLoading(true);

    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate('/dashboard');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
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
              Register
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
