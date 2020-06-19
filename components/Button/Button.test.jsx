import React from 'react'
import serializer from 'jest-emotion'
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import mountWithTheme from '../../utils/mountWithTheme'
import Button from './Button'
import theme from '../../configs/theme'

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
  test('Shows disabled state', () => {
    const component = mountWithTheme(
      <Button disabled>Sample Button with disabled state</Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Shows buttonType secondary', () => {
    const component = mountWithTheme(
      <Button buttonType="secondary">Sample Button with secondary style</Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Renders in DOM correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Sample Button in DOM</Button>
      </ThemeProvider>
    )

    expect(getByText(/Sample Button/)).toBeTruthy()
  })
  test('OnClick Works Fine', () => {
    let variable = 1
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            variable += 1
          }}
        >
          Sample Button in DOM
        </Button>
      </ThemeProvider>
    )

    fireEvent.click(getByText(/Sample Button/))

    expect(variable).toBe(2)
  })
})
