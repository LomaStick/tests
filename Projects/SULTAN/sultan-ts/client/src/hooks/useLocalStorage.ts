import {useState, useEffect} from 'react'
import { IProducts } from '../types/types';

function useLocalStorage(ititialValue : any[], key: string){
	const getValue = (): any[] => {
		const storage = localStorage.getItem(key);
		if (storage !== null){
			return JSON.parse(storage);
		}
		return ititialValue;
	}
	const [value, setValue] = useState(getValue);
	useEffect(()=>{
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);
	return [value, setValue]
}