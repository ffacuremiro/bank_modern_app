import React from 'react';

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`hover:animate-pulse py-3 px-5 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
      Comenzar
    </button>
  );
}

export default Button;
