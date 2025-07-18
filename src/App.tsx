
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import Main from './pages/main/Main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
