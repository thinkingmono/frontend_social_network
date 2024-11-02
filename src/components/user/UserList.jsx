import PropTypes from "prop-types";

const UserList = () => {
  return (
    <>
      <h1>User List</h1>
    </>
  )
}

// Validación de props usando PropTypes
UserList.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func,
  following: PropTypes.array.isRequired,
  setFollowing: PropTypes.func,
  more: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func,
  setCounters: PropTypes.func
};

export default UserList