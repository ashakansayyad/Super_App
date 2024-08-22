
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { AppProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
 <AppProvider>
  <App/>
 </AppProvider>
)
