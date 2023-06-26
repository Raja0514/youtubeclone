import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";

import { Provider } from "react-redux";

import store from "./utils/store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}
export default App;
