import React, { useEffect, useRef, useState } from "react";
import FormRef from "./FormRef";

function DemoRef() {
  const inputRef = useRef();
  const fileInputRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    // console.log("inputRef", inputRef.current.value);
    // inputRef.current.focus();
  }, []);

  const handleSubmit = (values) => {
    // email , password
    console.log("values", values);
  };

  return (
    <div className="container">
      <h2 className="mb-5">Form Ref</h2>
      <FormRef onSubmit={handleSubmit} ref={formRef} />
      <button
        onClick={() => formRef.current.requestSubmit()}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Login
      </button>
    </div>
  );
}

export default DemoRef;
