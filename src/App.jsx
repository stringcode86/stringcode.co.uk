import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Showcase from './pages/Showcase'
import ErrorBoundary from "./components/ErrorBoundary.jsx";


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/showcase' element={<Showcase/>}/>
                <Route path='*' element={<HomePage/>}/>
            </Route>
        )
    );
    return (
        <ErrorBoundary>
            <RouterProvider router={router}/>
        </ErrorBoundary>
    )
};
export default App;
