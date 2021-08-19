import React from "react";
import {useSelector} from 'react-redux';

export const Profile = () => {

  const currentUser = useSelector((state) => state.register) 
  
  

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};
