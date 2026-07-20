import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInput = ({ name, placeholder, value, onChange, required = true, minLength }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        tabIndex={-1}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
      >
        {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
      </button>
    </div>
  );
};

export default PasswordInput;
