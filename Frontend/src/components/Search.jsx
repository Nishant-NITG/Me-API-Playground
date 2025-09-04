import { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`http://localhost:5000/api/user/search?q=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Search failed')
      }
      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError(err.message)
      console.error('Search error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Search</h2>

        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for skills, projects, education..."
              className="flex-1 px-4 py-2 rounded-full bg-transparent border border-white/6 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[--accent] to-[#5b21b6] text-sm"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="p-3 rounded-md bg-red-900/30 text-red-300 mb-4">
            Error: {error}
          </div>
        )}

        {results && (
          <div>
            <h3 className="text-sm text-[--muted] mb-4">Results for “{query}”</h3>

            {results.profile && results.profile.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs text-[--muted] mb-2">Profile Matches</h4>
                <ul className="space-y-2">
                  {results.profile.map((field, i) => (
                    <li key={i} className="p-3 rounded-md bg-white/2">{field}</li>
                  ))}
                </ul>
              </div>
            )}

            {results.education && results.education.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs text-[--muted] mb-2">Education</h4>
                <div className="space-y-2">
                  {results.education.map((edu, i) => (
                    <div key={i} className="p-3 rounded-md bg-white/2">
                      <div className="flex justify-between">
                        <strong>{edu.institution}</strong>
                        <span className="text-xs text-[--muted]">{edu.year}</span>
                      </div>
                      <div className="text-sm text-[--muted]">{edu.degree}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.skills && results.skills.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs text-[--muted] mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {results.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-white/3 text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            {results.projects && results.projects.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs text-[--muted] mb-2">Project Matches</h4>
                <div className="space-y-3">
                  {results.projects.map((p, i) => (
                    <div key={i} className="p-3 rounded-md bg-white/2">
                      <div className="flex justify-between">
                        <strong>{p.title}</strong>
                        <span className="text-xs text-[--muted]">{p.year || ''}</span>
                      </div>
                      <p className="text-sm text-[--muted] mt-1">{p.description}</p>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        {p.skills.map((s,si) => (<span key={si} className="text-xs px-2 py-1 rounded-md bg-white/3">{s}</span>))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.work && results.work.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs text-[--muted] mb-2">Work</h4>
                <div className="space-y-2">
                  {results.work.map((j, idx) => (
                    <div key={idx} className="p-3 rounded-md bg-white/2">
                      <div className="flex justify-between">
                        <strong>{j.company}</strong>
                        <span className="text-xs text-[--muted]">{j.duration}</span>
                      </div>
                      <div className="text-sm text-[--muted]">{j.position}</div>
                      {j.description && <p className="mt-1 text-sm text-gray-200">{j.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Object.values(results).every(arr => arr.length === 0) && (
              <p className="text-[--muted]">No results found for "{query}"</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Search
