import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import Button from './Button'

expect.addSnapshotSerializer(serializer)

describe('Button', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<Button>Sample Button</Button>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Shows Loading state', () => {
    const component = mountWithTheme(
      <Button loading>Sample Button with loading</Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
