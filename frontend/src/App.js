// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventsPage, { loader as loadedData } from "./Pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./Pages/EventDetail";
import NewEventPage from "./Pages/NewEvent";
import RootLayout from "./Pages/RootLayout";
import EventsRoot from "./Pages/EventsRoot";
import ErrorPage from "./Pages/Error";
import EditEventPage from "./Pages/EditEvent";

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
                  // loader: eventDetailLoader,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  // loader: eventDetailLoader,
                },
              ],
            },
            { path: "new", element: <NewEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
