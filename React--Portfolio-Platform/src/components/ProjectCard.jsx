import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Image placeholder matching the mockup */}
      <div className="project-image">
        <span className="project-image-x">✕</span>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  )
}