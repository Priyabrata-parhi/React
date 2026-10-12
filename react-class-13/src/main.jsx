
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoryContext from './context/StoryContext.jsx'


createRoot(document.getElementById('root')).render(
  <StoryContext>
     <App />
  </StoryContext>
)
