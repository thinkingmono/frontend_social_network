import PropTypes from "prop-types";

const PublicationList = () => {
  return (
    <>
      <h1>Publication List</h1>
    </>
  )
}

PublicationList.propTypes = {
  publications: PropTypes.array.isRequired,
  getPublications: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  more: PropTypes.bool.isRequired,
  setMore: PropTypes.func.isRequired,
  isProfile: PropTypes.bool
};

export default PublicationList