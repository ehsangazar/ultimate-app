import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import InputPassword from './InputPassword'

expect.addSnapshotSerializer(serializer)

describe('InputPassword', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<InputPassword placeholder="sample" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
