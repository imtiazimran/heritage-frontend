import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { Provider } from 'react-redux'
import { persister, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
          <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
