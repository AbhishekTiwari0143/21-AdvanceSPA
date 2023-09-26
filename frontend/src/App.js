// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventsPage, { loader as loadedData } from "./Pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDeleteHandler,
} from "./Pages/EventDetail";
import NewEventPage from "./Pages/NewEvent";
import RootLayout from "./Pages/RootLayout";
import EventsRoot from "./Pages/EventsRoot";
import ErrorPage from "./Pages/Error";
import EditEventPage from "./Pages/EditEvent";
import { action as manipulateEvents } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./Pages/Newsletter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: loadedData,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: eventDeleteHandler,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  actions: manipulateEvents,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: manipulateEvents,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
