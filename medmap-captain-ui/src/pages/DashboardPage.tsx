import { TopBar } from '../components/TopBar'
import { MapView } from '../components/MapView'
import { Navbar } from '../components/Navbar'
import { useRide } from '../context/RideContext'

export function DashboardPage() {
  const { requestLocation, acceptRequest } = useRide()

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar />
      <div className="px-4 space-y-4">
        <MapView center={requestLocation} />
        <button
          onClick={acceptRequest}
          className="w-full bg-green-600 text-white rounded-lg py-3 font-medium hover:bg-green-700"
        >
          Accept Request
        </button>
      </div>
      <Navbar />
    </div>
  )
}

