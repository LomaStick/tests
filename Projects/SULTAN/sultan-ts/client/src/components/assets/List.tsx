import * as React from 'react';

interface ListProps<T> {
	className?: string;
	title?:string;
	items: T[];
	renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {	
	return (
		<div className={props.className}>
			{props.title && <div className={props.className+'_title'}>{props.title}</div>}
			{props.items.map(props.renderItem)}
		</div>
	)
}
