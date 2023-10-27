import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBar from "./MainBar";
import HomePage, { loader as homeLoader } from "../pages/HomePage";
import BucketListsPage from "../pages/BucketListsPage";
import BucketList from "./BucketList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBar />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "bucketlists",
        element: <BucketListsPage />,
      },
      {
        path: "bucketlists/:bucketlistId",
        element: <BucketList />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Root;
