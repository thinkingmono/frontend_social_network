import { Outlet } from 'react-router-dom'
import HeaderPrivate from './HeaderPrivate'
import Sidebar from './Sidebar'

const PrivateLayout = () => {
  return (
    <>
      {/* Main Nav Menu Private*/}
      <HeaderPrivate />
      {/* Main Content Private*/}
      <section className='layout__content'>
        <Outlet />
      </section>
      {/* Sidebar */}
      <Sidebar />
    </>
  )
}
export default PrivateLayout