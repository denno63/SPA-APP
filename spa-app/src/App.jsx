import { useMemo, useState } from 'react'
import ProjectCard from './components/ProjectCard'
import './App.css'
import "./assets/style.css";

const initialProjects = [
  {
    title: 'Moonsoon Safari',
    description: 'A responsive safari booking application with real-time availability and seamless  integration.',
    tags: ['React', 'UI', 'Responsive'],
    url: 'https://github.com/theblackkingshow/moonsoon_safaris',
  },
  {
    title: 'Polymarket',
    description: 'A dynamic market prediction platform with real-time data visualization and user-friendly interface.',
  
    tags: ['Productivity', 'Dashboard', 'React'],
    url: 'https://github.com/theblackkingshow/polymarket',
  },
  {
    title: 'Migiro Motors',
    description: 'A modular design system with reusable components, color tokens, and accessibility-first patterns.',
    tags: ['Design', 'Accessibility', 'Components'],
    url: 'https://github.com/theblackkingshow/migiro.motors',
  },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [search, setSearch] = useState('')
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    tags: '',
    url: '',
  })

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return projects
    return projects.filter((project) => {
      const combined = [project.title, project.description, project.tags.join(' ')].join(' ').toLowerCase()
      return combined.includes(term)
    })
  }, [projects, search])

  const handleChange = (field) => (event) => {
    setFormValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = formValues.title.trim()
    const description = formValues.description.trim()
    if (!title || !description) return

    const nextProject = {
      title,
      description,
      tags: formValues.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      url: formValues.url.trim() || '#',
    }

    setProjects((current) => [nextProject, ...current])
    setFormValues({ title: '', description: '', tags: '', url: '' })
  }

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Personal project showcase</span>
          <h1>Show off your work and launch new ideas.</h1>
          <p>
            Browse featured projects, add new entries, and filter the collection instantly with a responsive interface.
          </p>
          <div className="hero-stats">
            <div>
              <strong>{projects.length}</strong>
              <span>projects</span>
            </div>
            <div>
              <strong>{filteredProjects.length}</strong>
              <span>visible</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <p>Clean interface</p>
            <h2>Responsive layout</h2>
          </div>
          <div className="hero-accent" aria-hidden="true" />
        </div>
      </header>

      <section className="controls-panel">
        <div className="search-block">
          <label htmlFor="search">Search projects</label>
          <input
            id="search"
            type="search"
            placeholder="Search by title, description, or tag"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <form className="project-form" onSubmit={handleSubmit}>
          <h2>Add a new project</h2>
          <div className="form-grid">
            <label>
              Project name
              <input
                value={formValues.title}
                onChange={handleChange('title')}
                placeholder="Example app"
              />
            </label>
            <label>
              Description
              <textarea
                value={formValues.description}
                onChange={handleChange('description')}
                placeholder="A quick summary of what this project does"
              />
            </label>
            <label>
              Tags
              <input
                value={formValues.tags}
                onChange={handleChange('tags')}
                placeholder="React, UI, Responsive"
              />
            </label>
            <label>
              Link
              <input
                value={formValues.url}
                onChange={handleChange('url')}
                placeholder="https://..."
              />
            </label>
          </div>
          <button type="submit">Add project</button>
        </form>
      </section>

      <section className="project-grid" aria-label="Project list">
        {filteredProjects.length === 0 ? (
          <div className="empty-state">
            <p>No projects match your search.</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <article key={`${project.title}-${project.url}`} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <ul>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a href={project.url} target="_blank" rel="noreferrer">
                  View project
                </a>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  )
}

export default App;