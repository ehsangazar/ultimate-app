import React from 'react'
import mountWithTheme from '../../utils/mountWithTheme'
import Button from './Button'

describe('Button', () => {
  test('Render Correctly', () => {
    const component = mountWithTheme(<Button>Sample Button</Button>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
