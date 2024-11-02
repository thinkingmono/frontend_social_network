import NavPrivate from "./NavPrivate"

const HeaderPrivate = () => {
  return (
    <header className="layout__navbar">
      <div className="navbar__header">
        <a href="#" className="navbar__title">Red Social</a>
      </div>
      <NavPrivate />
    </header>
  )
}
export default HeaderPrivate