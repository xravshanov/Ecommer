import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from "./Context.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AppProvider>
        <App />
   </AppProvider>
    
  </BrowserRouter>
    
  
)
