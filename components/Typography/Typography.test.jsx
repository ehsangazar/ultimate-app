import React from 'react'
import serializer from 'jest-emotion'
import mountWithTheme from '../../utils/mountWithTheme'
import { H1, H2, H3, H4, H5, Paragraph, Small, Space } from '.'

expect.addSnapshotSerializer(serializer)

describe('Typography', () => {
  test('H1 Renders Correctly', () => {
    const component = mountWithTheme(<H1>Heading</H1>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H2 Renders Correctly', () => {
    const component = mountWithTheme(<H2>Heading</H2>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H3 Renders Correctly', () => {
    const component = mountWithTheme(<H3>Heading</H3>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H4 Renders Correctly', () => {
    const component = mountWithTheme(<H4>Heading</H4>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H5 Renders Correctly', () => {
    const component = mountWithTheme(<H5>Heading</H5>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Paragraph Renders Correctly', () => {
    const component = mountWithTheme(<Paragraph>Heading</Paragraph>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Small Renders Correctly', () => {
    const component = mountWithTheme(<Small>Heading</Small>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Space Renders Correctly', () => {
    const component = mountWithTheme(<Space />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
