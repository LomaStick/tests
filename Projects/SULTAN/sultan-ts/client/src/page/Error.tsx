import * as React from 'react';

interface IErrorProps {
}

const Error: React.FunctionComponent<IErrorProps> = (props) => {
	return(
		<div className='errorPage'>
			<p>
				Страница не существует
      </p>
		</div>
	) ;
};

export default Error;
