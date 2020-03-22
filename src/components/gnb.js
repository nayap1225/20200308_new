import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import { Text } from '../design-system/text'
// import Container from '../design-system/container'

import { Text, Container } from '../design-system'

const GnbContainer = styled(Container)`
  border-bottom: 1px solid #efefef;
`

const LINKS = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/webtoon',
    label: 'webtoon',
  },
  {
    path: '/pokemon',
    label: 'pokemon',
  },
]

function Gnb({ title }) {
  return (
    <GnbContainer padding="20px 10px">
      <Text fontSize="31" bold>
        {title}
      </Text>
      {LINKS.map(({ path, label }, idx) => (
        <Link to={path} key={idx}>
          {label}
        </Link>
      ))}
    </GnbContainer>
  )
}

Gnb.propTypes = {
  gnb: PropTypes.string,
}

export default Gnb
