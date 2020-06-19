import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import InputEmail from './InputEmail'

expect.addSnapshotSerializer(serializer)

describe('InputEmail', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<InputEmail placeholder="sample" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
