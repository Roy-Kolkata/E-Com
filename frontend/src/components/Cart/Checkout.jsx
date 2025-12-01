import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const cart = {
        products: [
            {
                name: "T-shirt",
                size: "M",
                color: "Red",
                price: 1500,
                image: "https://picsum.photos/200?random=1"
            },
            {
                name: "Jeans",
                size: "L",
                color: "Blue",
                price: 500,
                image: "https://picsum.photos/200?random=2"
            }
        ],
        totalPrice: 2000
    }
    const navigate = useNavigate()
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: ""
    })
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl  mx-auto py-10 px-6 tracking-tighter'>
            {/* left section */}
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase  mb-6">Checkout</h2>
                <form action="">
                    <h3 className='text-lg mb-4'>
                        Contact details
                    </h3>
                    <div className="mb-4">
                        <label htmlFor="" className="block  text-gray-700">
                            <input type="text" value="user@example.com" className='w-full p-2 border rounded disabled' />
                        </label>
                    </div>
                    <h3 className="text-lg mb-4  ">  Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="" className="block text-gray-700">First Name</label>
                            <input value={shippingAddress.firstName} onChange={(e) => setShippingAddress({
                                ...shippingAddress, firstName: e.target.value
                            })} type="text" className="w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700">Last Name</label>
                            <input value={shippingAddress.lastName} onChange={(e) => setShippingAddress({
                                ...shippingAddress, lastName: e.target.value
                            })} type="text" className="w-full p-2 border rounded" required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className="block text-gray-700">Address</label>
                        <input value={shippingAddress.address} onChange={(e) => setShippingAddress({
                            ...shippingAddress, address: e.target.value
                        })} type="text" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="" className="block text-gray-700">City</label>
                            <input value={shippingAddress.city} onChange={(e) => setShippingAddress({
                                ...shippingAddress, city: e.target.value
                            })} type="text" className="w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700">Postal Code</label>
                            <input value={shippingAddress.postalCode} onChange={(e) => setShippingAddress({
                                ...shippingAddress, postalCode: e.target.value
                            })} type="text" className="w-full p-2 border rounded" required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className="block text-gray-700">Country</label>
                        <input value={shippingAddress.country} onChange={(e) => setShippingAddress({
                            ...shippingAddress, country: e.target.value
                        })} type="text" className="w-full p-2 border rounded" required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" type="tel" className="block text-gray-700">Phone No</label>
                        <input value={shippingAddress.phone} onChange={(e) => setShippingAddress({
                            ...shippingAddress, phone: e.target.value
                        })} type="text" className="w-full p-2 border rounded" required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout