import React from 'react'
import { useState } from "react";


const InputForm = (props) => {
    return (
        <div className="form  my-32 mx-auto bg-gray rounded-4xl m-32 p-8">
            <form>
              <div className="flex flex-col space-y-4">
                <label htmlFor="" className="text-center">
                  {" "}
                  Enter Github username
                </label>
                <input
                  type="text"
                  id="username"
                  value={props.user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="GitHub userName"
                  className="border-2 border-gray-300 rounded-lg p-2 text-black"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                  onClick={props.handleSubmit}
                >
                  Generate Stats
                </button>
              </div>
            </form>
          </div>
    )
}
export default InputForm;
