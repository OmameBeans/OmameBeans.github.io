import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../../pages/home";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}