import ProductWrapper from './components/ProductWrapper'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './index.css'
import data from './assets/data.json'

function App() {
  return (
    <>
      <ProductWrapper data={data}/>
      <Cart/>
      <Footer />
    </>
  )
}

export default App
