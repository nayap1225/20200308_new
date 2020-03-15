import React from 'react'
import { boolean, Text, number } from '@storybook/addon-knobs'
import { Text } from '.'

export default { title: 'Text', component: Text }

export const baseText = () => (
  <>
    <text
      fontSize={number('fontSize', 13)}
      bold={boolean('bold', false)}
      inlineBlock={boolean('inlineBloc', false)}
      margin={text('margin')}
      padding={text('padding')}
    >
      가나다라마바사아
    </text>
  </>
)
