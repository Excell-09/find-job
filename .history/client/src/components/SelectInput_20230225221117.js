import React from 'react';

const SelectInput = ({ label, name, option, changeHandle, value }) => {
  return (
    <div className='flex flex-col '>
      <label htmlFor={name}>{label}</label>
      <select className=' shadow-md border-[2px] capitalize w-full outline-none rounded-sm h-10' id={name} name={name} value={value} onChange={changeHandle}>
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
