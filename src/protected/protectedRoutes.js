import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Protected = ({ children }) => {  
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

Protected.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Protected;
