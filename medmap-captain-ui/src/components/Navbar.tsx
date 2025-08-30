import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto flex justify-around py-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `px-4 py-2 rounded-md text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => `px-4 py-2 rounded-md text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
        >
          Profile
        </NavLink>
      </div>
    </nav>
  )
}

