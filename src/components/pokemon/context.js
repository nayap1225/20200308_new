import React, { createContext, useContext, useState } from 'react'
import Proptypes from 'prop-types'

const Context = createContext()

export function PokemonContextProvider({ children }) {
  const [pokemon, setPokemon] = useState(null)

  return (
    <Context.Provider value={{ pokemon, setPokemon }}>
      {children}
    </Context.Provider>
  )
}

export function usePokemonContext() {
  return useContext(Context)
}

PokemonContextProvider.propTypes = {
  children: Proptypes.element,
}
