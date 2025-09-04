const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'profile', name: 'Profile' },
    { id: 'projects', name: 'Projects' },
    { id: 'search', name: 'Search' },
  ]

  return (
    <header className="w-full border-b border-white/4">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md flex items-center justify-center glass">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
              <path d="M3 12h18" stroke="white" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 6h18" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 18h18" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Me-API Playground</h1>
            <p className="text-xs text-[--muted]">Profile · Projects · Search</p>
          </div>
        </div>

        <nav className="flex items-center gap-2 bg-transparent">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-[--accent] to-[#5b21b6] shadow-md text-white'
                  : 'text-[--muted] hover:bg-white/3 hover:text-white'}
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation
