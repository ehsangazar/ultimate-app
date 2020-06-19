import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import InputText from './InputText'

expect.addSnapshotSerializer(serializer)

describe('InputText', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<InputText placeholder="sample" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
