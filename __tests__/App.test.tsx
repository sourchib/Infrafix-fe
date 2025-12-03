import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('should render the main heading', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(
      screen.getByText('Hello Vite + React + Tailwind CSS!')
    ).toBeInTheDocument()
  })

  it('should increment the count when the button is clicked', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const button = screen.getAllByRole('button', { name: /count is:/i })[0]
    expect(button.textContent).toContain('count is: 0')
    fireEvent.click(button)
    expect(button.textContent).toContain('count is: 1')
  })
})
