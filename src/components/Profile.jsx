import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const getSingleUser = async () => {
    const api_url = "https://dummyjson.com/users";
    const response = await fetch(`${api_url}/${userId}`);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="relative">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-40 h-40 rounded-full shadow-md object-cover border-4 border-blue-500 transition-transform transform hover:scale-105"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-6">
          <h2 className="text-4xl font-bold text-blue-800">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="text-lg text-gray-600">Username: {user.username}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Personal Info</h4>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium text-gray-900">First Name:</span> {user.firstName}</p>
            <p><span className="font-medium text-gray-900">Last Name:</span> {user.lastName}</p>
            <p><span className="font-medium text-gray-900">Email:</span> {user.email}</p>
            <p><span className="font-medium text-gray-900">Phone:</span> {user.phone}</p>
            <p><span className="font-medium text-gray-900">Birthdate:</span> {user.birthDate}</p>
            <p><span className="font-medium text-gray-900">Age:</span> {user.age}</p>
            <p><span className="font-medium text-gray-900">Gender:</span> {user.gender}</p>
            <p><span className="font-medium text-gray-900">University:</span> {user.university}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Address Details</h4>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium text-gray-900">Address:</span> {user?.address?.address}</p>
            <p><span className="font-medium text-gray-900">City:</span> {user?.address?.city}</p>
            <p><span className="font-medium text-gray-900">Country:</span> {user?.address?.country}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Company Details</h4>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium text-gray-900">Company Name:</span> {user?.company?.name}</p>
            <p><span className="font-medium text-gray-900">Department:</span> {user?.company?.department}</p>
            <p><span className="font-medium text-gray-900">Title:</span> {user?.company?.title}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Company Address Details</h4>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium text-gray-900">Address:</span> {user?.company?.address?.address}</p>
            <p><span className="font-medium text-gray-900">City:</span> {user?.company?.address?.city}</p>
            <p><span className="font-medium text-gray-900">Country:</span> {user?.company?.address?.country}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/users">
          <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
