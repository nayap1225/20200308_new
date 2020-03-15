import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { Container } from '.'

export default { title: 'Container', component: Text }

export const base = () => (
  <>
    <Container
      centered={boolean('centerd', false)}
      margin={text('margin')}
      padding={text('padding')}
      textAlgin={select('textAlgin', ['left', 'center', 'right'], 'left')}
    >
      가나다라마바사아
    </Container>
  </>
)
