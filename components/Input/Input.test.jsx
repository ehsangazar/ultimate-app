import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import Input from './Input'

expect.addSnapshotSerializer(serializer)

describe('Input', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<Input type="text" placeholder="sample" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
