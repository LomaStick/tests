import * as React from 'react';

interface IInputProps {
	placeholder:string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	
}

const Input: React.FC<IInputProps> = ({placeholder,value, onChange}) => {
  return (
	<input
		 type="text"
		 value={value}
		 onChange={onChange}
		 placeholder={placeholder}
	  />
  );
};

export default Input;
