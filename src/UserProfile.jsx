import React, { useState } from 'react';

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, user]);
    setUser({
      name: '',
      age: '',
      email: ''
    });
  };

  return (
    <div className="user-profile-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={user.age}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="user-profiles">
        {users.map((user, index) => (
          <div key={index} className="user-profile">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
