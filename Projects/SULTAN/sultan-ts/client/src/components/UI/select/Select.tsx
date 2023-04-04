import React, { useState }  from 'react';
import { icons, Option } from '../../../types/types';
import Icon from '../../Icon';

interface ISelectProps {
	classesName: string;
	value: Option | null;
	options: Option[];
	onChange: (selection: Option) => void;
}

const Select: React.FunctionComponent<ISelectProps> = (
	{classesName = 'select', value, options, onChange}) => {

	const [showOptions, setShowOptions] = useState(false)
	let classActive ='';
	showOptions ? classActive = classesName + '_active' : classActive = '';

  return (
	<div className={classesName + '__wrapper'}>
			<div className={[classesName, classActive].join(' ')}
				 onClick = {()=> setShowOptions(!showOptions)}
			>
			{/* Select defaultvalue */}
				{value && 
					<span className={classesName+'__options_option'}>
						<span>{value.label}</span>
						{!value.increase && <Icon className = {classesName + "__options_icon"} icon={icons.arrows_price_list}/>}
					</span>}
			</div>
				{showOptions && (
					<div  className={classesName +"__options"}>
						{options.map(option => (
							<div 
								className = {classesName +"__options_option"}
								onClick={()=> {onChange(option); setShowOptions(!showOptions)}}
								key={[option.value,'Increase',option.increase].join('')}
							>
								<span>{option.label}</span>
								{!option.increase && <Icon className = {classesName + "__options_icon"} icon={icons.arrows_price_list} />}
							</div>	
						))}
					</div>
				)}
		</div>
  );
};

export default Select;
