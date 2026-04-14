import React from 'react';

const OrderManagement = () => {

    const orders = [
        {
            id: 123332,
            user: {
                name: "John Doe",
            },
            totalPrice: 110,
            status: "pending",
        }
    ];
    const handleStatusChange = (orderId, newStatus) => {
        console.log("order id", orderId, "new status", newStatus);
    }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-6'>Order Management</h2>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-500 text-xs uppercase text-gray-700 '>
                        <tr>
                            <th className='py-3 px-4'>Order ID</th>
                            <th className='py-3 px-4'>Customer</th>
                            <th className='py-3 px-4'>Total</th>
                            <th className='py-3 px-4'>Status</th>
                            <th className='py-3 px-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((o) => (
                                <tr key={o.id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                    <td className='py-4 px-4 font-medium text-gray-900 whitespace-nowrap'>
                                        #{o.id}
                                    </td>
                                    <td className='py-4 px-4'>
                                        {o.user.name}
                                    </td>
                                    <td className='py-4 px-4'>
                                        ${o.totalPrice}
                                    </td>
                                    <td className='py-4 px-4'>
                                        <select
                                            value={o.status}
                                            onChange={(e) => handleStatusChange(o.id, e.target.value)}
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className='py-4 px-4'>
                                        <button
                                            onClick={() => handleStatusChange(orders.id, 'Delevered')}
                                            className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
                                        >
                                            Mark as delivered
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-gray-500">
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default OrderManagement;