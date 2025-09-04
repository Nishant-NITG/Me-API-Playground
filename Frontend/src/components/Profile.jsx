const Profile = ({ data }) => {
  if (!data) return <div className="min-h-[200px] flex items-center justify-center text-[--muted]">No profile data available</div>

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="glass rounded-2xl p-6 grid gap-6 grid-cols-1 md:grid-cols-3 items-start">
        {/* left: avatar + contact */}
        <div className="flex flex-col items-center md:items-start md:col-span-1">
          <div className="w-28 h-28 rounded-xl overflow-hidden glass flex items-center justify-center">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[--accent] to-[#3b82f6] flex items-center justify-center text-xl font-bold">
              {data.name?.split(' ').map(n=>n[0]).slice(0,2).join('')}
            </div>
          </div>

          <h2 className="mt-4 text-xl font-semibold">{data.name}</h2>
          <p className="text-sm text-[--muted]">{data.email}</p>

          <div className="mt-4 flex gap-3">
            {data.links.github && (<a className="text-xs px-3 py-1 rounded-full glass" href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>)}
            {data.links.linkedin && (<a className="text-xs px-3 py-1 rounded-full glass" href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>)}
            {data.links.portfolio && (<a className="text-xs px-3 py-1 rounded-full glass" href={data.links.portfolio} target="_blank" rel="noreferrer">Portfolio</a>)}
          </div>
        </div>

        {/* middle: basics */}
        <div className="md:col-span-2 grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
            <div className="p-4 glass rounded-xl">
              <h3 className="text-sm text-[--muted]">About</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                Third-year B.Tech EEE student at NIT Goa with a strong foundation in backend development using the MERN stack. Proficient in designing RESTful APIs, managing databases, and delivering efficient server-side solutions. Eager to contribute technical skills and grow through a challenging internship opportunity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="p-4 rounded-xl glass">
              <h3 className="text-sm text-[--muted] mb-3">Education</h3>
              <div className="space-y-3">
                {data.education.map((edu, i) => (
                  <div key={i} className="p-3 rounded-md bg-white/2">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-medium text-sm">{edu.institution}</h4>
                      <span className="text-xs text-[--muted]">{edu.year}</span>
                    </div>
                    <p className="text-xs text-[--muted]">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl glass">
              <h3 className="text-sm text-[--muted] mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-md bg-white/3">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile