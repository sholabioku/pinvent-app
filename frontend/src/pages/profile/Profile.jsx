import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { SET_NAME, SET_USER } from '../../redux/features/auth/authSlice';
import { getUser } from '../../services/authService';

import './Profile.scss';

const Profile = () => {
  useRedirectLoggedOutUser('/login');
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function getUserData() {
      const data = await getUser();

      console.log(data);

      setProfile(data);
      setIsLoading(false);
      dispatch(SET_USER(data));
      dispatch(SET_NAME(data.name));
    }

    getUserData();
  }, [dispatch]);

  return <div>Profile</div>;
};

export default Profile;
