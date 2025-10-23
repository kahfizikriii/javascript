// UserCard.tsx
import React from 'react';

interface UserCardProps {
  name: string;
  age: number;
  avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, }) => (
  <div className="user-card">
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);

export default UserCard;
