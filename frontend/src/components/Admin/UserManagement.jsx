import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      id: 12332,
      name: "Jhon Doe",
      email: "jhon@gmail.com ",
      role: "admin",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //default role
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };
  const handleRoleChange = (userId, newRole) => {
    console.log({ id: userId, role: newRole });
    // Here you would update the user's role in your state or make an API call
  };
  const handleDelete = (userId) => {
    if(window.confirm("are you sure you want to delete this user")){
        console.log("deletig user id ",userId);
  }
   
  };
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-6 ">User management</h2>
      {/* add new user from  */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg  font-bold mb-4 ">Add New user</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <labble className="block text-gray-700 mb-2 ">Name</labble>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg "
              required
            />
          </div>
          <div className="mb-4">
            <labble className="block text-gray-700 mb-2 ">Email</labble>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded "
              required
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 "
          >
            Add User
          </button>
        </form>
      </div>
      {/* user list management */}
      <div className="overflow-x-auto  sm:rounded-lg ">
        <table className="min-w-full  text-left text-gray-500 ">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>

                <td className="p-4 text-gray-700">{user.email}</td>

                <td className="p-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 "
                  >
                    Delete
                  </button>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
