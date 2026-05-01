import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  test('renders the search input', () => {
    render(<SearchBar value="" onChange={() => {}} />)
    expect(screen.getByPlaceholderText('Search Projects')).toBeInTheDocument()
  })

  test('shows the current value', () => {
    render(<SearchBar value="hello" onChange={() => {}} />)
    expect(screen.getByPlaceholderText('Search Projects')).toHaveValue('hello')
  })

  test('calls onChange when user types', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<SearchBar value="" onChange={handleChange} />)
    await user.type(screen.getByPlaceholderText('Search Projects'), 'a')
    expect(handleChange).toHaveBeenCalled()
  })
})