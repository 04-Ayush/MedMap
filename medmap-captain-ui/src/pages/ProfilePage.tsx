import { useAuth } from '../context/AuthContext'

export function ProfilePage() {
  const { captain, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 pb-16 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex flex-col items-center gap-3 mt-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl">
            {captain?.name ? captain.name.charAt(0) : 'C'}
          </div>
          <div className="text-center space-y-1">
            <div className="text-lg font-semibold text-gray-900">{captain?.name}</div>
            <div className="text-gray-700">{captain?.email}</div>
            <div className="text-gray-500 text-sm">ID: {captain?.id}</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 space-y-3">
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg py-2 font-medium">Edit Profile</button>
          <button onClick={logout} className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 font-medium">Logout</button>
        </div>
      </div>
    </div>
  )
}

