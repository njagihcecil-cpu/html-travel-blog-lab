import { useState } from 'react'
import './AddProjectForm.css'

export default function AddProjectForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <div className="form-card">
      <h2 className="form-title">ADD PROJECT</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button className="form-button" type="submit">Add</button>
      </form>
    </div>
  )
}