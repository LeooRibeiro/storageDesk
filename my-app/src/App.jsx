import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  return (
    <div className='flex h-full w-full'>
        <Sidebar />
        <MainContent />
    </div>
  )
}

export default App
