import './index.css'
import AppRouter from './routes/router'

function App({ basename }) {
  return <AppRouter basename={basename} />
}

export default App
