import { useState, useEffect } from 'react'
import Profile from './components/Profile'
import Projects from './components/Projects.jsx'
import Search from './components/Search'
import Navigation from './components/Navigation'

function App() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileData, setProfileData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProfileData()
  }, [])

  const fetchProfileData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://me-api-playground-backend-4n1g.onrender.com/api/user')
      if (!response.ok) {
        throw new Error('Failed to fetch profile data')
      }
      const data = await response.json()
      setProfileData(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching profile:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-sm text-[--muted]">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-sm text-red-500">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="py-10">
        {activeTab === 'profile' && <Profile data={profileData} />}
        {activeTab === 'projects' && <Projects data={profileData} />}
        {activeTab === 'search' && <Search />}
      </main>
    </div>
  )
}

export default App
