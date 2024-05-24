import { useState, useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const Home = () => {
	const url = "https://pokeapi.co/api/v2/pokemon"
	const { data: pokemonList } = useFetch(url)
	const [pokemonData, setPokemonData] = useState(null)

	useEffect(() => {
		const gettingInnerUrl = async () => {
			if (pokemonList) {
				const urlList = pokemonList.results.map(async (pokemon) => {
					const res = await fetch(pokemon.url)
					return res.json()
				})

				const pokemonDetails = await Promise.all(urlList)
				setPokemonData(pokemonDetails)
				console.log(pokemonData)
			}
		}

		gettingInnerUrl()
	}, [pokemonList])

	return (
		<div>
			{pokemonData &&
				pokemonData.map((pokemon) => (
					<div key={pokemon.id}>
						<img
							src={pokemon.sprites.other.showdown.front_default}
							alt={pokemon.name + " Animated Sprite"}
						/>
						<h2>{pokemon.name}</h2>
					</div>
				))}
		</div>
	)
}

export default Home
