import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard'

const mockProject = {
  id: 1,
  title: 'My Project',
  description: 'A test description',
}

describe('ProjectCard', () => {
  test('renders the project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('My Project')).toBeInTheDocument()
  })

  test('renders the project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test description')).toBeInTheDocument()
  })
})