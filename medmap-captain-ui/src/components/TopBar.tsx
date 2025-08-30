import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function TopBar() {
  const { captain } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-3 p-4">
      <button
        aria-label="Profile"
        onClick={() => navigate('/profile')}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
      >
        {captain?.name ? captain.name.charAt(0) : 'C'}
      </button>
      <div className="text-sm text-gray-600">Captain</div>
    </div>
  )
}

