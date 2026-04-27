import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/Sidebar'

export default function MainLayout() {
  return (
    <div className="app-container">
      <SideBar />

      <div className="main-content">
        <Header />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
