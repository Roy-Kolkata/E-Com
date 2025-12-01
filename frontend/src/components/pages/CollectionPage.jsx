import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from "react-icons/fa"
import FilterSidebar from '../Products/FilterSidebar'
import SortOptions from '../Products/SortOptions'
import ProductsGrid from '../Products/ProductsGrid'
const CollectionPage = () => {
    const [products, setProducts] = useState([])
    const sideBarRef = useRef()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleClicksOutside = (e) => {
        if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
            setIsSidebarOpen(false)
        }
    }

    useEffect(() => {
        //add event listener on clicks
        document.addEventListener("mousedown", handleClicksOutside)
        //clean event listener
        return () => {
            document.removeEventListener("mousedown", handleClicksOutside)
        }
    },[])
    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 4,
                    name: "Product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }]
                },
                {
                    _id: 6,
                    name: "Product 2",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }]
                },
                {
                    _id: 7,
                    name: "Product 3",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=9" }]
                },
                {
                    _id: 8,
                    name: "Product 4",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }]
                },
            ]
            setProducts(fetchedProducts)
        }, 1000);
    })
    return (
        <div className='flex flex-col lg:flex-row'>
            {/* mobile filter button */}
            <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className='mr-2' />
            </button>

            {/* filter sidebar */}
            <div ref={sideBarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50  left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />
            </div>
            <div className="flex-grow  p-4">
                <h2 className="text-2xl uppercase mb-4">All Collection</h2>

                {/* sort options */}
                <SortOptions />

                {/* product grid */}
                <ProductsGrid products={products} />
            </div>
        </div>
    )
}

export default CollectionPage