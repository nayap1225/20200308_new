// import React from 'react'
import styled, { css } from 'styled-components'

// margin, padding, bold, (display) => inline - block, color
// export const Text = styled.div`
//   ${(props) => {
//     console.log(props)
//   }}
// `

export const Text = styled.div`
	${({ fontSize }) =>
    `
	font-size: ${fontSize || 13}px;

	`}
  ${({ bold }) =>
    bold && // props에 bold가 있을때만
    `
	font-weight: bold;

  `}
  ${({ margin }) =>
    margin &&
    `
	margin: ${margin};

  `}
  ${({ padding }) =>
    padding &&
    `
	padding: ${padding};
  `}
  ${({ inlineBlock }) =>
    inlineBlock &&
    `
	display: inline-block;
  `}
`
