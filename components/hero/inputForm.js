import React from 'react';
import { useEffect, useState } from 'react';

const InputForm = (props) => {
  const { user, setUser, handleSubmit } = props;

  const handleUserChange = (e) => {
    // console.log(e.target.value);
    setUser(e.target.value);
    // console.log(user + " in inputform");
  };
  // useEffect(() => {
  //   console.log(user); // Log the updated user value
  // }, [user]);
// console.log(user + " in inputform");
// checked - working
  return (
    <div className="form my-32 mx-auto bg-gray rounded-4xl m-32 p-8">
      <form>
        <div className="flex flex-col space-y-4">
          <label htmlFor="userName" className="text-center">
            Enter GitHub userName
          </label>
          <input
            type="text"
            id="userName"
            value={user}
            onChange={handleUserChange}
            placeholder="GitHub userName"
            className="border-2 border-gray-300 rounded-lg p-2 text-black"
          />
          <button
            type="submit"
            className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Generate Stats
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;

