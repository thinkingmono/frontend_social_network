import { Outlet } from 'react-router-dom'
import HeaderPublic from './HeaderPublic'

const PublicLayout = () => {
  return (
    <>
      {/* Main Nav Menu Public*/}
      <HeaderPublic />
      {/* Main Content Public*/}
      <section className='layout__content'>
        <Outlet />
      </section>
    </>
  )
}
export default PublicLayout