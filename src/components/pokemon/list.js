import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container, Text } from '../../design-system'
import { fetchPokemons, fetchPokemon } from './service'
import { usePokemonContext } from './context'

const ListFrame = styled(Container)``

// function List({ onClick }) {
//   const [pokemons, setPokemons] = useState([])
//   useEffect(() => {
//     async function fetchAndSetPokemons() {
//       setPokemons(await fetchPokemons())
//     }
//     fetchAndSetPokemons()
//   }, [])

function List({}) {
  const [pokemons, setPokemons] = useState([])
  const { setPokemon } = usePokemonContext()

  useEffect(() => {
    async function fetchAndSetPokemons() {
      setPokemons(await fetchPokemons())
    }
    fetchAndSetPokemons()
  }, [])

  // console.log('pokemons', pokemons)

  const handleClickPoemon = async (url) => {
    // onClick(await fetchPokemon(url))
    setPokemon(await fetchPokemon(url))
  }

  return (
    <ListFrame display="inline-block" width="250">
      {pokemons.map(({ name, url }, idx) => (
        <Text key={idx} onClick={() => handleClickPoemon(url)}>
          {name}
        </Text>
      ))}
    </ListFrame>
  )
}

List.propTypes = {
  onClick: PropTypes.func,
}

export default List
