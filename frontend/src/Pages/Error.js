import { useRouteError } from "react-router";
import PageContent from "../components/PageContent";
import RootLayout from "./RootLayout";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error Occured!";
  let message = "Something Went Wrong";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not FOUND";
    message = "Could Not found resourse";
  }

  return (
    <>
      <RootLayout />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
