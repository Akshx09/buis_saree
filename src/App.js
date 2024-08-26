import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Components/LandingPage';
import AddProduct from './Components/AddProduct';
import BusinessLogin from './Components/Login';
import 'reactjs-popup/dist/index.css'
function App() {
	const router = createBrowserRouter([
		{
			path:"/", element:<><Navbar/><LandingPage/><Home/></>
		},
		{
			path:"/home", element: <><Navbar/><Home/></>
		},
		{
			path:"/addProd", element: <><Navbar/><AddProduct/></>
		},
		{
            path: "/businessLogin",  element: <BusinessLogin />
        }
	])
	return (
		<div className="App">
			<RouterProvider router={router}/>
			<ToastContainer position="top-right"
                        autoClose={2500}
                        hideProgressBar={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="light"
                        transition= {Slide}/>
		</div>
	);
}

export default App;
