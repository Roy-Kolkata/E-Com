import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PayPalButton from './PayPalButton'

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
    const [checkoutId,setCheckoutId]=useState(null)
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
    const handleCreateCheckout  =(e)=>{
        e.preventDefault()
        setCheckoutId(123)
    }
    const handlePaymentSuccess = (details)=>{
        console.log("Payment Successful",details)
        navigate("/order-confirmation")
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl  mx-auto py-10 px-6 tracking-tighter'>
            {/* left section */}
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase  mb-6">Checkout</h2>
                <form onSubmit={handleCreateCheckout} action="">
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
                    <div className="mt-6">
                        {!checkoutId?(
                            <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
                        ):(
                            <div>
                                <h3 className='text-lg mb-4'>Pay with Paypal</h3>
                                {/* Paypal button */}
                                <PayPalButton amount={100} 
                                onSuccess={handlePaymentSuccess}
                                onError={(err)=>alert("Payment faild.Try again.")}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>
            {/* Right Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className='text-lg mb-4'>Order Summary</h3>
                <div className='border-t py-4 mb-4'>
                    {cart.products.map((product,index)=>(
                        <div key={index} className='flex items-start justify-between py-2 border-b'>
                            <div className="flex items-start">
                                <img src={product.image} alt={product.name} className='w-20 h-24 object-cover' />
                            </div>
                            <div>
                                <h3 className='text-md '>{product.name}</h3>
                                <p className='text-sm text-gray-600'>Size: {product.size}</p>
                                <p className='text-sm text-gray-600'>Color: {product.color}</p>
                                <p className='text-sm text-gray-600'>Price: ${product.price}</p>
                            </div>
                            <p className='text-xl'>${product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between items-center text-lg mb-4'>
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className='flex justify-between items-center text-lg '>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg  mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout