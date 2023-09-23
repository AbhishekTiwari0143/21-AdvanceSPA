// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventsPage, { loader as loadedData } from "./Pages/Events";
import EventDetailPage from "./Pages/EventDetail";
import NewEventPage from "./Pages/NewEvent";
import RootLayout from "./Pages/RootLayout";
import EventsRoot from "./Pages/EventsRoot";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
            { path: ":EventDetailsID", element: <EventDetailPage /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":NewEventId/edit", element: <NewEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
