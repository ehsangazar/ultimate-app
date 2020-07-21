import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import Alert from './Alert'

expect.addSnapshotSerializer(serializer)

describe('Alert', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<Alert> Alert</Alert>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
