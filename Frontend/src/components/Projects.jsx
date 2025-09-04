import { useState, useEffect } from 'react'

const Projects = ({ data }) => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedSkill, setSelectedSkill] = useState('all')

  useEffect(() => {
    if (data && data.projects) {
      setProjects(data.projects)
      setFilteredProjects(data.projects)
    }
  }, [data])

  const handleSkillFilter = (skill) => {
    setSelectedSkill(skill)
    if (skill === 'all') {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter(project =>
        project.skills.map(s => s.toLowerCase()).includes(skill.toLowerCase())
      )
      setFilteredProjects(filtered)
    }
  }

  const allSkills = [...new Set(projects.flatMap(project => project.skills))]

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Projects</h2>
          <div className="flex items-center gap-3">
            <label className="text-xs text-[--muted]">Filter</label>
            <select
              value={selectedSkill}
              onChange={(e) => handleSkillFilter(e.target.value)}
              className="rounded-full px-3 py-2 text-sm bg-transparent border border-white/6"
            >
              <option value="all">All Skills</option>
              {allSkills.map((skill, index) => (
                <option key={index} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-[--muted]">No projects found with the selected skill.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="p-5 rounded-xl glass">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <div className="text-xs text-[--muted]">{project.year || ''}</div>
                </div>

                <p className="mt-3 text-sm text-gray-200">{project.description}</p>

                <div className="mt-4">
                  <h4 className="text-xs text-[--muted] mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((s, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/3">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Conditionally render links section - don't show for second project */}
                {index !== 1 && project.links && project.links.length > 0 && (
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.links.map((link, li) => (
                      <a key={li} href={link} target="_blank" rel="noreferrer"
                         className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-[--accent] to-[#5b21b6] shadow-sm">
                        View
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects