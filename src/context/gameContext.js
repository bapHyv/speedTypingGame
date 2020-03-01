import React from 'react'

const gameContext = React.createContext({})

export const GameProvider = gameContext.Provider
export const Consumer = gameContext.Consumer

export default gameContext