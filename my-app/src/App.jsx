import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './App.css'

function App() {
  return (
    <div className=''>
      <Header />
      <div className='flex w-full h-screen'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
