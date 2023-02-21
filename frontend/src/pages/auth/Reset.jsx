import React from 'react';
import { MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';

import styles from './auth.module.scss';

const Reset = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <MdPassword size={35} color='#999' />
          </div>
          <h2>Reset Password</h2>
          <form>
            <input
              type='password'
              placeholder='New Password'
              name='password'
              required
            />
            <input
              type='password'
              placeholder='Confirm New Password'
              name='password'
              required
            />
            <button type='submit' className='--btn --btn-primary --btn-block'>
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to='/'>- Home</Link>
              </p>
              <p>
                <Link to='/login'>- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
