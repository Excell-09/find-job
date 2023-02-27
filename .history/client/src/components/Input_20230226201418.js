import React, { useState } from 'react';
import { AiFillEye, AiTwotoneEyeInvisible } from 'react-icons/ai';

const Input = ({ label, type, changeHandle, labelTag = false, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [iconEye, setIconEye] = useState(false);

  return (
    <div className='relative shadow-md border-[1px]'>
      {labelTag }
      <input
        className='w-full px-2 outline-none rounded-sm h-10'
        placeholder={label}
        {...props}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        required
        onChange={changeHandle}
      />
      {type === 'password' &&
        (iconEye ? (
          <AiTwotoneEyeInvisible
            className='text-2xl absolute top-[8px] right-[8px]'
            onClick={() => {
              setIconEye(!iconEye);
              setShowPassword(!showPassword);
            }}
          />
        ) : (
          <AiFillEye
            className='text-2xl absolute top-[8px] right-[8px]'
            onClick={() => {
              setIconEye(!iconEye);
              setShowPassword(!showPassword);
            }}
          />
        ))}
    </div>
  );
};

export default Input;
