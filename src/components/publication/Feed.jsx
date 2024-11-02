import PublicationList from "./PublicationList"

const Feed = () => {
  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Timeline</h1>
        <button className="content__button">Mostrar nuevas</button>
      </header>

      <PublicationList
        publications={[]}
        getPublications={() => { }}
        page={1}
        setPage={() => { }}
        more={false}
        setMore={() => { }}
        isProfile={false} // No es un perfil, es el feed
      />
      <br />
    </>
  )
}
export default Feed