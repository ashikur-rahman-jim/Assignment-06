import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Stats from './components/Stats'
import { Heading3 } from 'lucide-react'

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json();
}



function App() {
  
  const productsPromise = getProducts();

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
