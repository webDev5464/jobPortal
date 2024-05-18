import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RouterLayout from './components/layouts/RouterLayout'
import UserLayout from './components/layouts/UserLayout'
import AdminLayout from './components/layouts/AdminLayout'
import EmployerLayout from './components/layouts/EmployerLayout'
export default function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout />,
      children: [
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
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
