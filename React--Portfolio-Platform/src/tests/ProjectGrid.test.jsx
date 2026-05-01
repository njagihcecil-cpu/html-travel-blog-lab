// ProjectGrid.test.jsx

import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectGrid from '../components/ProjectGrid'

const MOCK_PROJECTS = [
  {
    id: 1, title: 'Alpha', category: 'Web',
    description: 'First project description here.',
    tags: ['React'], year: '2024', color: '#e8ff47', emoji: '✦',
  },
  {
    id: 2, title: 'Beta', category: 'Branding',
    description: 'Second project description here.',
    tags: ['Print'], year: '2023', color: '#ff6b35', emoji: '◎',
  },
]

describe('ProjectGrid', () => {
  test('renders all project cards', () => {
    render(<ProjectGrid projects={MOCK_PROJECTS} searchQuery="" />)
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
  })

  test('shows empty state when no projects match', () => {
    render(<ProjectGrid projects={[]} searchQuery="xyz123" />)
    expect(screen.getByText(/no projects found/i)).toBeInTheDocument()
    expect(screen.getByText(/"xyz123"/)).toBeInTheDocument()
  })

  test('renders the correct number of project cards', () => {
    render(<ProjectGrid projects={MOCK_PROJECTS} searchQuery="" />)
    // Each project is a <article> element
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(2)
  })
})