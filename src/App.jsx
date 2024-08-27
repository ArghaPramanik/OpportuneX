import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import { Button } from './components/ui/button'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/job-listing'
import MyJobs from './pages/my-jobs'
import PostJob from './pages/post-job'
import SavedJobs from './pages/saved-jobs'
import { ThemeProvider } from './components/theme-provider'
import JobPage from './pages/job'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([
  {
    element :<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:(
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        )
      },
      {
        path:'/Jobs',
        element:(
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        )
      },
      {
        path:'/job/:id',
        element:(
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        )
      },
      {
        path:'/my-jobs',
        element:(
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        )
      },
      {
        path:'/post-job',
        element:(
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        )
      },
      {
        path:'/saved-jobs',
        element:(
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        )
      },
    ]
  }
])

function App() {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router = {router}/>
    </ThemeProvider>
      
    )
}

export default App
