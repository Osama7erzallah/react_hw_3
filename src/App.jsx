import Home from './components/home/Home.jsx'
import Proudcts from './components/products/Products.jsx'
import Restaurant from './components/restaurant/Restaurant.jsx'
import Navbar_PR from './components/navbar/Navbar_PR.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar_PR />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Proudcts />}></Route>
          <Route path="/Restaurant" element={<Restaurant />}></Route>
          
         
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
