import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      index: true,
      element: <Homepage />,
    },
    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "/bookDetails/:bookId",
      Component: BookDetails,
      loader: () => fetch("/booksData.json"),
    }
    ],
    errorElement: <ErrorPage />,
  },
]);