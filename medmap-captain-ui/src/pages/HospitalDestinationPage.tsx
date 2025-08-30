import { TopBar } from '../components/TopBar'
import { MapView } from '../components/MapView'
import { Navbar } from '../components/Navbar'
import { useRide } from '../context/RideContext'

export function HospitalDestinationPage() {
  const { user, hospital } = useRide()

  const markers = [] as { lat: number; lng: number }[]
  if (user) markers.push(user.location)
  if (hospital) markers.push(hospital.location)

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar />
      <div className="px-4 space-y-4">
        <MapView center={hospital?.location ?? user?.location ?? { lat: 0, lng: 0 }} markers={markers} />
        <div className="bg-white rounded-lg shadow p-4 space-y-1">
          <div className="text-sm text-gray-500">Hospital Details</div>
          <div className="text-gray-900 font-medium">{hospital?.name}</div>
          <div className="text-gray-700">Address: {hospital?.address}</div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

