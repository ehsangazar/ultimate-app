import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import Hyperlink from './Hyperlink'

expect.addSnapshotSerializer(serializer)

describe('Hyperlink', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(
      <Hyperlink href="/">Sample Hyperlink</Hyperlink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
