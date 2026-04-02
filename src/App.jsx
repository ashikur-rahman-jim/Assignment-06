import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Stats from './components/Stats'
import { Heading3 } from 'lucide-react'
import Steps from './components/Steps'
import Pricing from './components/Pricing'

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json();
}

const getSteps = async () => {
  const res = await fetch("/steps.json")
  return res.json();
}

const getPrice = async () => {
  const res = await fetch("/pricing.json")
  return res.json();
}



function App() {
  
  const productsPromise = getProducts();

  const stepsPromise = getSteps();

  const pricePromise = getPrice();

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Pricing pricePromise={pricePromise}></Pricing>
      </Suspense>
    </>
  )
}

export default App
