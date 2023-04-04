import React from 'react';




const Select = ({options, value, onChange}) => {
	const valuevalid = () => {
		if (value){
			console.log(value);
		}
	}
	return (
			<select 
				className='Catalog-header__selectList'
				value={valuevalid}
				onChange = {event => onChange(event.target.value)}
			>
				{options.map(option =>
					<option key={option.value} className='Catalog-header__selectOption' value={option.value}>
						{option.name}
					</option>
				)}
			</select>
	);
}

export default Select;
