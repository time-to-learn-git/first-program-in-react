import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// another Elemnet
const otherElement=(
  <a href='https://google.com' target='_blank'>click me to go google </a>
)
// now created other Element
const array=(
  'a',
  {href: 'https://google.com', target: '_blank' },
  "click me to go google lalala"
)

createRoot(document.getElementById('root')).render(
    <App/>
  )
