import { TopBar } from '../components/TopBar'
import { MapView } from '../components/MapView'
import { Navbar } from '../components/Navbar'
import { useRide } from '../context/RideContext'

export function UserDetailsPage() {
  const { user, requestLocation, confirmPickup } = useRide()

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar />
      <div className="px-4 space-y-4">
        <MapView center={requestLocation} />
        <div className="bg-white rounded-lg shadow p-4 space-y-1">
          <div className="text-sm text-gray-500">User Details</div>
          <div className="text-gray-900 font-medium">{user?.name}</div>
          <div className="text-gray-700">Age: {user?.age}</div>
          <div className="text-gray-700">Address: {user?.address}</div>
        </div>
        <button
          onClick={confirmPickup}
          className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700"
        >
          Confirm Pickup
        </button>
      </div>
      <Navbar />
    </div>
  )
}

