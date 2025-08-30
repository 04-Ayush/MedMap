import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import type { LatLng } from '../context/RideContext'

type MapViewProps = {
  center: LatLng
  markers?: LatLng[]
}

export function MapView({ center, markers = [] }: MapViewProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey ?? '' })

  const mapCenter = useMemo(() => ({ lat: center.lat, lng: center.lng }), [center])

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-600 text-sm">
        Set VITE_GOOGLE_MAPS_API_KEY to render the map
      </div>
    )
  }

  if (!isLoaded) {
    return <div className="h-64 flex items-center justify-center">Loading map...</div>
  }

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerClassName="w-full h-64 rounded-lg overflow-hidden"
        zoom={13}
        center={mapCenter}
        options={{ disableDefaultUI: true }}
      >
        <Marker position={mapCenter} />
        {markers.map((m, idx) => (
          <Marker key={idx} position={{ lat: m.lat, lng: m.lng }} />
        ))}
      </GoogleMap>
    </div>
  )
}

