import React from 'react'
import { Container, Text } from '../../design-system'
import PropTypes from 'prop-types'
import { usePokemonContext } from './context'

// function Detail({ pokemon }) {
//   if (!pokemon) {
//     return null
//   }

//   const {
//     weight,
//     height,
//     sprites: { front_defult, back_default, front_shiny, back_shiny },
//   } = pokemon

//   console.log('pokemon', pokemon)

//   return (
//     <Container display="inline-block" width="400">
//       <img src={front_defult} />
//     </Container>
//   )
// }

function Detail({}) {
  const { pokemon } = usePokemonContext()
  if (!pokemon) {
    return null
  }

  const {
    weight,
    height,
    sprites: { front_default, back_default, front_shiny, back_shiny },
  } = pokemon

  console.log('pokemon', pokemon)

  return (
    <Container display="inline-block" width="400">
      <img src={front_default} />
    </Container>
  )
}

Detail.propTypes = {
  pokemon: PropTypes.object,
}

export default Detail
