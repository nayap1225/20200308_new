// import React from 'react'
import styled, { css } from 'styled-components'

// margin, padding, bold, (display) => inline - block, color

export const Container = styled.div`
	${({ position }) =>
    position &&
    `
		position: ${position};
	`}
  ${({ width }) =>
    width &&
    `
	width: ${width}px;
  `}
  ${({ maxWidth }) =>
    maxWidth &&
    `
	max-width: ${maxWidth}px;
  `}
  ${({ height }) =>
    height &&
    `
	height: ${height}px;
`}
  ${({ centered }) =>
    centered &&
    `
	  margin: 0 auto;
  `}
  ${({ textAlgin }) =>
    textAlgin &&
    `
	  textAlign: textAlign;
  `}	
`
