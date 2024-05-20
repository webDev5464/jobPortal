import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RouterLayout from './components/layouts/RouterLayout'
import UserLayout from './components/layouts/UserLayout'
import AdminLayout from './components/layouts/AdminLayout'
import EmployerLayout from './components/layouts/EmployerLayout'
import Register from './components/layouts/Register'
import Navbar from './components/layouts/Navbar'
import Home from './components/Home'
import Employers from './components/layouts/Employers'
import Jobs from './Jobs'
import Candidates from './components/layouts/Candidates'
import Packages from './components/layouts/Packages'
import Pages from './Pages'
export default function App() {

  let router = createBrowserRouter([
    
    {
      path: '/',
      element: <RouterLayout />,
      children: [
        {
            path:'/',
            element:<Navbar />,
            children:[
              
            ]
        },
        {
          path:'Home',
          element:<Home />,
          children:[
            
          ]
      },
      {
        path:'jobs',
        element:<Jobs />,
        children:[
          
        ]
    },
    
      
      {
        path:'Employer',
        element:<Employers />,
        children:[
          
        ]
    },
    {
      path:'candidate',
      element:<Candidates />,
      children:[
        
      ]
  },
  {
    path:'packages',
    element:<Packages />,
    children:[
      
    ]
},
{
  path:'pages',
  element:<Pages />,
  children:[
    
  ]
},
        {
          path: '',
          element: <UserLayout />,
          children: [

          ]
        },
        {
          path: 'employer',
          element: <EmployerLayout />,
          children: [

          ]
        },
        {
          path: 'admin',
          element: <AdminLayout />,
          children: [

          ]
        },
        {
          path: 'register',
          element: <Register />,
          children: [

          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
