import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type LatLng = { lat: number; lng: number }

type UserDetails = {
  name: string
  age: number
  address: string
  location: LatLng
}

type HospitalDetails = {
  name: string
  address: string
  location: LatLng
}

type RideContextValue = {
  requestLocation: LatLng
  user: UserDetails | null
  hospital: HospitalDetails | null
  acceptRequest: () => void
  confirmPickup: () => void
}

const RideContext = createContext<RideContextValue | undefined>(undefined)

export function RideProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const [requestLocation] = useState<LatLng>({ lat: 37.7749, lng: -122.4194 })
  const [user, setUser] = useState<UserDetails | null>(null)
  const [hospital, setHospital] = useState<HospitalDetails | null>(null)

  const acceptRequest = () => {
    setUser({
      name: 'Jordan Patient',
      age: 42,
      address: '123 Market St, San Francisco, CA',
      location: requestLocation,
    })
    navigate('/user')
  }

  const confirmPickup = () => {
    setHospital({
      name: 'General Hospital',
      address: '1001 Potrero Ave, San Francisco, CA',
      location: { lat: 37.7557, lng: -122.4044 },
    })
    navigate('/hospital')
  }

  const value = useMemo<RideContextValue>(() => ({
    requestLocation,
    user,
    hospital,
    acceptRequest,
    confirmPickup,
  }), [requestLocation, user, hospital])

  return <RideContext.Provider value={value}>{children}</RideContext.Provider>
}

export function useRide() {
  const ctx = useContext(RideContext)
  if (!ctx) throw new Error('useRide must be used within RideProvider')
  return ctx
}

