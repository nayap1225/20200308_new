import React, { useEffect, useState } from 'react'
import { Container } from '../../design-system/container'
import { fetchWebtoons } from '../../service/webtoon'
import Webtoon from './webtoon'

function Webtoons() {
  const [webtoons, setWebtoons] = useState(null)

  useEffect(() => {
    async function fetchAndSetWebtoons() {
      const webtoons = await fetchWebtoons()
      //  console.log(Webtoons)
      setWebtoons(webtoons)
    }
    fetchAndSetWebtoons()

    // Promise   비동기를 동기처럼
  }, [])

  console.log('webtoons', webtoons)

  if (!webtoons) {
    return null
  }

  return (
    <Container>
      {webtoons.map((webtoon, idx) => (
        <Webtoon key={idx} source={webtoon} />
      ))}
    </Container>
  )
}

export default Webtoons
