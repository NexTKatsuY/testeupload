import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(url);
				const json = await res.json();

				if (!res.ok) {
					throw 'Houve um erro na comunicação com o banco de dados ';
				}

				setData(json);
			} catch (error) {
				setError(error);
			}
		};

		getData();
	}, [url]);

	return { data, error };
};

export default useFetch;
