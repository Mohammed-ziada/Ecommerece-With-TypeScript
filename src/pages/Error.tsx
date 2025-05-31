import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorState: number;
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorState = error.status;
    errorMessage = error.statusText;
  } else {
    errorState = 404;
    errorMessage = "Page Not Found";
  }
  return (
    <Container className="notFound">
      <h1>{errorState}</h1>
      <p>{errorMessage}</p>
      <Link to="/" replace={true}>
        Go to Home
      </Link>
    </Container>
  );
};
export default Error;
