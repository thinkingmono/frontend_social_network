import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from "../components/layouts/public/PublicLayout"
import PrivateLayout from "../components/layouts/private/PrivateLayout"
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import Feed from "../components/publication/Feed"
import People from "../components/user/People"
import Config from "../components/user/Config"
import Error404 from "../components/layouts/Error404"

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>
        {/* Private Route */}
        <Route path="/red-social" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
          <Route path="gente" element={<People />} />
          <Route path="ajustes" element={<Config />} />
        </Route>
        {/* 404 Error Route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routing