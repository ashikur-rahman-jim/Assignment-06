import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import FreeTrial from './components/FreeTrial'
import Footer from './components/Footer'
import Tabs from './components/Tabs'
import Cart from './components/Cart'

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

const productsPromise = getProducts();

const stepsPromise = getSteps();

const pricePromise = getPrice();



function App() {

  const [activeTab, setActiveTab] = useState("products");

  const [carts, setCarts] = useState([])
  // console.log(carts);


  return (
    <>
      <NavBar carts={carts}></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <Tabs setActiveTab={setActiveTab} carts={carts}></Tabs>

      {activeTab === "products" ? <Suspense fallback={<h3>Loading...</h3>}>
        <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>
      </Suspense> : null}

      {activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts}></Cart> : null}

      <Suspense fallback={<h3>Loading...</h3>}>
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Pricing pricePromise={pricePromise}></Pricing>
      </Suspense>

      <FreeTrial></FreeTrial>

      <Footer></Footer>

    </>
  )
}

export default App
