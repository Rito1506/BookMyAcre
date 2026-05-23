import { useMemo, useState } from 'react'
import './InnerPage.css'

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'plots', label: 'Plots' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
  { id: 'Luxe Property', label: 'Luxe Property' },
]

const projects = [
  { img: '/img/projects/3.png', title: 'Velotech City', category: 'Dholera IST Project', type: 'plots', href: 'https://velotechcity.com/' },
  { img: '/img/projects/1.png', title: 'Veda Farms', category: 'Noida', type: 'plots', href: 'https://www.vedafarms.in' },
  { img: '/img/projects/neo_farms.png', title: 'NEO Farms', category: 'Delhi NCR', type: 'plots' },
  { img: '/img/projects/5.png', title: 'M3M Group', category: 'NCR', type: 'commercial' },
  { img: '/img/projects/8.png', title: 'ACE Street', category: 'Sector 150, Noida', type: 'commercial' },
  { img: '/img/projects/4.png', title: 'Escon Panorama', category: 'Greater Noida West', type: 'residential' },
  { img: '/img/projects/6.png', title: 'ACE Edit', category: 'Sector 22D, Greater Noida', type: 'residential' },
  { img: '/img/projects/2.png', title: 'ACE Hive', category: 'Greater Noida', type: 'residential' },
  { img: '/img/projects/7.png', title: 'ACE Acreville', category: 'Noida Expressway', type: 'residential' },
]

const TYPE_LABELS = {
  plots: 'Plots',
  commercial: 'Commercial',
  residential: 'Residential',
}

function ProjectCard({ project }) {
  const Tag = project.href ? 'a' : 'article'
  const linkProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <Tag
      className={`project-card${project.href ? ' project-card--link' : ''}`}
      {...linkProps}
    >
      <div className="project-card__media">
        <img src={project.img} alt={project.title} loading="lazy" />
        <span className={`project-card__badge project-card__badge--${project.type}`}>
          {TYPE_LABELS[project.type]}
        </span>
        {project.href && (
          <span className="project-card__icon" aria-hidden="true">
            <i className="fas fa-external-link-alt" />
          </span>
        )}
      </div>
      <div className="project-card__body">
        <p className="project-card__location">{project.category}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <span className="project-card__cta">
          {project.href ? 'Visit project' : 'View details'}
          <i className="fas fa-arrow-right" />
        </span>
      </div>
    </Tag>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.type === activeFilter),
    [activeFilter],
  )

  return (
    <div className="inner-page">
      <div className="page-hero" style={{ backgroundImage: 'url(/img/bg/projects.jpg)' }}>
        <div className="container">
          <h1 className="fade-in">Projects</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="text-primary">Land Parcels</span></h2>
            <div className="section-divider" />
            <p style={{ marginTop: '1rem' }}>Explore premium land opportunities in prime locations across Noida and NCR.</p>
          </div>

          <div
            className="projects-filter"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTER_OPTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeFilter === id}
                className={`projects-filter__btn ${activeFilter === id ? 'projects-filter__btn--active' : ''}`}
                onClick={() => setActiveFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-page-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="container projects-filter-empty">
            <p>No projects in this category yet. Try another filter.</p>
          </div>
        )}
      </section>
    </div>
  )
}
