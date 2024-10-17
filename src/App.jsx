import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Showcase from './pages/Showcase'


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
        <RouterProvider router={router}/>
    )
};
export default App;
