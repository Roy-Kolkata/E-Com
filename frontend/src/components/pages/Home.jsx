import React from 'react'
import Hero from '../Layout/Hero'
import GenderCollectionSection from '../Products/GenderCollectionSection'
import NewArrivals from '../Products/NewArrivals'
import ProductDetails from '../Products/ProductDetails'
import ProductsGrid from '../Products/ProductsGrid'
import FeaturedCollection from '../Products/FeaturedCollection'
import FeaturesSection from '../Products/FeaturesSection'

const placeholderProducts=[
   {
        _id:4,
        name:"Product 1",
        price:100,
        images :[{url:"https://picsum.photos/500/500?random=6"}]
    },
    {
        _id:6,
        name:"Product 2",
        price:100,
        images :[{url:"https://picsum.photos/500/500?random=7"}]
    },
    {
        _id:7,
        name:"Product 3",
        price:100,
        images :[{url:"https://picsum.photos/500/500?random=9"}]
    },
    {
        _id:8,
        name:"Product 4",
        price:100,
        images :[{url:"https://picsum.photos/500/500?random=8"}]
    },
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>

        {/* best seller section */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails/>
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Top Wears for women
          </h2>
          <ProductsGrid products={placeholderProducts}/>
        </div>
        <FeaturedCollection/>
        <FeaturesSection/>
    </div>
  )
}

export default Home