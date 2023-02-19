import { render, screen } from '@testing-library/react'
import App from './components/App/App'

// eslint-disable-next-line jest/require-top-level-describe
test('renders learn react link', () => {
  expect.assertions(2)
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
