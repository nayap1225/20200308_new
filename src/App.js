import React from 'react'
import Title from './components/title'
import WebtoonsPage from './pages/webtoons'
import { Container } from './design-system/container'
import { GlobalStyle } from './components/reset-style'

// state = 내가 가진 값
// props = 누군가를 통해 받은 값

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title text="메인 페이지" />
        <WebtoonsPage />
      </Container>
    </>
  )
}

export default App
