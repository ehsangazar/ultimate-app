import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import InputTextArea from './InputTextArea'

expect.addSnapshotSerializer(serializer)

describe('InputTextArea', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<InputTextArea placeholder="sample" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
