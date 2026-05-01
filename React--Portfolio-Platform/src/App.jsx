import { useState } from 'react'
import Header from './components/Header'
import AddProjectForm from './components/AddProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import './App.css'

const initialProjects = [
  { id: 1, title: 'Project 1', description: 'Description of the project' },
  { id: 2, title: 'Project 2', description: 'Description of the project' },
  { id: 3, title: 'Project 3', description: 'Description of the project' },
]

export default function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Add a new project to the list
  function handleAddProject(newProject) {
    setProjects([...projects, { id: Date.now(), ...newProject }])
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <AddProjectForm onAdd={handleAddProject} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  )
}