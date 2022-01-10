import React, { createContext, useState } from 'react';
import { useBetween } from 'use-between';

export const UserContext = createContext();


const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();
  const changeCurrentUser = ((user) => setCurrentUser(user));
  return {
    currentUser,
    changeCurrentUser
  };
};

export const useSharedUser = () => useBetween(useCurrentUser);