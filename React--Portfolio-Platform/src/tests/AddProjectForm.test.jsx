// AddProjectForm.test.jsx
// Tests form rendering, validation, and submission

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddProjectForm from '../components/AddProjectForm'

describe('AddProjectForm', () => {
  test('renders the form with all fields', () => {
    render(<AddProjectForm onSubmit={() => {}} onClose={() => {}} />)
    expect(screen.getByLabelText(/project title/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/tags/i)).toBeInTheDocument()
  })

  test('shows validation errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<AddProjectForm onSubmit={() => {}} onClose={() => {}} />)

    await user.click(screen.getByRole('button', { name: /add project/i }))

    await waitFor(() => {
      expect(screen.getByText(/project title is required/i)).toBeInTheDocument()
    })
  })

  test('shows category validation error when not selected', async () => {
    const user = userEvent.setup()
    render(<AddProjectForm onSubmit={() => {}} onClose={() => {}} />)

    await user.type(screen.getByLabelText(/project title/i), 'My Project')
    await user.click(screen.getByRole('button', { name: /add project/i }))

    await waitFor(() => {
      expect(screen.getByText(/please select a category/i)).toBeInTheDocument()
    })
  })

  test('calls onSubmit with correct data when form is valid', async () => {
    const user = userEvent.setup()
    const handleSubmit = jest.fn()
    render(<AddProjectForm onSubmit={handleSubmit} onClose={() => {}} />)

    await user.type(screen.getByLabelText(/project title/i), 'New Campaign')
    await user.selectOptions(screen.getByLabelText(/category/i), 'Branding')
    await user.type(
      screen.getByLabelText(/description/i),
      'A full brand identity for a new startup with logo and guidelines.'
    )
    await user.type(screen.getByLabelText(/tags/i), 'Identity, Print')

    await user.click(screen.getByRole('button', { name: /add project/i }))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'New Campaign',
          category: 'Branding',
          tags: ['Identity', 'Print'],
        })
      )
    })
  })

  test('calls onClose when Cancel is clicked', async () => {
    const user = userEvent.setup()
    const handleClose = jest.fn()
    render(<AddProjectForm onSubmit={() => {}} onClose={handleClose} />)

    await user.click(screen.getByRole('button', { name: /cancel/i }))
    expect(handleClose).toHaveBeenCalled()
  })

  test('calls onClose when X button is clicked', async () => {
    const user = userEvent.setup()
    const handleClose = jest.fn()
    render(<AddProjectForm onSubmit={() => {}} onClose={handleClose} />)

    await user.click(screen.getByLabelText(/close form/i))
    expect(handleClose).toHaveBeenCalled()
  })
})