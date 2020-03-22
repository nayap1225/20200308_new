import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Gnb from './components/gnb'
import { Container } from './design-system/container'
import { GlobalStyle } from './components/reset-style'

import WebtoonsPage from './pages/webtoons'
import HomePage from './pages/home'
import PokemonPage from './pages/pokemon'

// state = 내가 가진 값
// props = 누군가를 통해 받은 값

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Gnb title="Navbar" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/webtoon" component={WebtoonsPage} />
          <Route path="/pokemon" component={PokemonPage} />
          <Route component={() => <div>404: Error</div>} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
