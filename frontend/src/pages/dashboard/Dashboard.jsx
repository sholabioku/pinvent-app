import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/product/productList/ProductList';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getProducts } from '../../redux/features/product/productSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useRedirectLoggedOutUser('/login');

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [dispatch, isError, isLoggedIn, message]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ProductList />
    </div>
  );
};

export default Dashboard;
