import { useState } from "react";


export const useFetching = (callback: () => void) : [()=> void, boolean, string] => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	async function fetching() {
		try{
			setIsLoading(false)
			callback()
		}catch (e: any){
			setError(e.message);
		}finally{
			setIsLoading(false)
		}
	}
	return [fetching, isLoading, error]
}