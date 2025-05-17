import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router' // NOTE: use `react-router-dom`, not just `react-router`
import PromptsPage from './Pages/PromptsPage';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/prompts', element: <PromptsPage /> }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
