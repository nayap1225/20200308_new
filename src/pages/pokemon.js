import React from 'react'

import Pokemon from '../components/pokemon'
import { PokemonContextProvider } from '../components/pokemon/context'

function PokemonPage() {
  return (
    <div>
      <PokemonContextProvider>
        <Pokemon />
      </PokemonContextProvider>
    </div>
  )
}

export default PokemonPage
