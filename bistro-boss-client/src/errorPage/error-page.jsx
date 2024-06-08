import { useRouteError } from "react-router-dom";
import Navbar from "../components/shared/navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar></Navbar>
      <div id="error-page" className="flex flex-col justify-center items-center my-6">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <img src="https://i.postimg.cc/vmnDvy36/404.gif"></img>
      </div>
    </>
  );
}