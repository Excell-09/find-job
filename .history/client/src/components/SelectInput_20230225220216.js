import React from 'react';

const SelectInput = ({ label, name, option, changeHandle, value }) => {
  return (
    <div className='flex flex-col shadow-md row-span-2'>
      <label className='bg-transparent' htmlFor={name}>{label}</label>
      <select className='capitalize w-full outline-none rounded-sm h-10' id={name} name={name} value={value} onChange={changeHandle}>
        {option.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
