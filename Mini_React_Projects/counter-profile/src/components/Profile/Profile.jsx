import React from 'react';
import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';

export default function Profile({ name, email, age }) {
  return (
    <div>
      <Header />
      <UserProfile name={name} email={email} age={age} />
    </div>
  );
}