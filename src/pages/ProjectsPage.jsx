import './InnerPage.css'

const projects = [
  { img: '/img/projects/3.png', title: 'Velotech City', category: 'Dholera IST Project', href: 'https://velotechcity.com/' },
  { img: '/img/projects/1.png', title: 'Veda Farms', category: 'Noida', href: 'https://www.vedafarms.in' },
  { img: '/img/projects/4.png', title: 'Escon Panorama', category: 'Greater Noida West' },
  { img: '/img/projects/5.png', title: 'M3M Group', category: 'NCR' },
  { img: '/img/projects/6.png', title: 'ACE Edit', category: 'Sector 22D, Greater Noida' },
  { img: '/img/projects/2.png', title: 'ACE Hive', category: 'Greater Noida' },
  { img: '/img/projects/7.png', title: 'ACE Acreville', category: 'Noida Expressway' },
  { img: '/img/projects/8.png', title: 'ACE Street', category: 'Sector 150, Noida' },
  { img: '/img/projects/neo_farms.png', title: 'NEO Farms', category: 'Delhi NCR' },
]

export default function ProjectsPage() {
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
        </div>
        <div className="projects-page-grid">
          {projects.map((p, i) => (
            <div className="project-grid-card" key={i}>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer">
                  <img src={p.img} alt={p.title} />
                  <div className="project-grid-caption">
                    <h3>{p.title}</h3>
                    <p>{p.category}</p>
                  </div>
                </a>
              ) : (
                <>
                  <img src={p.img} alt={p.title} />
                  <div className="project-grid-caption">
                    <h3>{p.title}</h3>
                    <p>{p.category}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
