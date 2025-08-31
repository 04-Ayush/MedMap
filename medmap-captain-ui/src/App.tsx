import { Routes, Route, Navigate } from 'react-router-dom'
import type { ReactElement } from 'react'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { UserDetailsPage } from './pages/UserDetailsPage'
import { HospitalDestinationPage } from './pages/HospitalDestinationPage'
import { ProfilePage } from './pages/ProfilePage'
import { AuthProvider, useAuth } from './context/AuthContext'
import { RideProvider } from './context/RideContext'

function PrivateRoute({ children }: { children: ReactElement }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <RideProvider>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute><DashboardPage /></PrivateRoute>}
            />
            <Route
              path="/user"
              element={<PrivateRoute><UserDetailsPage /></PrivateRoute>}
            />
            <Route
              path="/hospital"
              element={<PrivateRoute><HospitalDestinationPage /></PrivateRoute>}
            />
            <Route
              path="/profile"
              element={<PrivateRoute><ProfilePage /></PrivateRoute>}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </RideProvider>
    </AuthProvider>
  )
}
