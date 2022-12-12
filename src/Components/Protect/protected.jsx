import { Redirect } from "react-router-dom";

const Protected = ({ children, isLoged }) => {
  return <>{isLoged ? children : <Redirect to="/login" />}</>;
};

export default Protected;
