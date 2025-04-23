import {createBrowserRouter, RouterProvider} from 'react-router';
// import je components
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
],
    { basename: "/Portfolio" }
);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;