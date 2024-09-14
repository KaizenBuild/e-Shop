import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city:'',
        zip:''
    });

    const cart = useSelector(state => state.cart);

    const navigate = useNavigate();

    const handleOrder = () =>{
        const newOrder = { 
            products: cart.products,
            orderNumber: "12344",
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>

                    {/* -------------------------Billing----------------------- */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>

                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div className='block text-gray-700'>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' placeholder='Enter Name' className='w-full px-3 py-2 border' />
                            </div>
                            <div className='block text-gray-700'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' placeholder='Enter Email' className='w-full px-3 py-2 border' />
                            </div>
                            <div className='block text-gray-700'>
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name='phone' placeholder='Enter Contact Number' className='w-full px-3 py-2 border' />
                            </div>
                        </div>
                    </div>

                    {/* -------------------------Shipping----------------------- */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
 
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div className='block text-gray-700'>
                                <label htmlFor="address">Address</label>
                                <input type="text" name='address' placeholder='Enter Address' className='w-full px-3 py-2 border' onChange={(e)=> setShippingInfo({...shippingInfo, address: e.target.value})}/>
                            </div>
                            <div className='block text-gray-700'>
                                <label htmlFor="city">City</label>
                                <input type="text" name='city' placeholder='Enter City' className='w-full px-3 py-2 border' onChange={(e)=> setShippingInfo({...shippingInfo, city: e.target.value})} />
                            </div>
                            <div className='block text-gray-700'>
                                <label htmlFor="zipcode">Zip Code</label>
                                <input type="text" name='zip' placeholder='Enter Zip Code' className='w-full px-3 py-2 border' onChange={(e)=> setShippingInfo({...shippingInfo, zip: e.target.value})} />
                            </div>
                        </div>
                    </div>

                    {/* -------------------------Payment----------------------- */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
                            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>

                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name='payment' checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                            </div>

                            <div className='flex items-center mb-2'>
                                <input type="radio" name='payment' checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>
                            </div>

                            {paymentMethod === "dc" && (
                                <div className='text-gray-700 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div className='mb-4'>
                                        <label htmlFor="cardNumber">Card Number</label>
                                        <input type="text" placeholder='Enter Card Number' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="cardHolder">Card Holder Name</label>
                                        <input type="text" placeholder='Enter Card Holder Name' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='mb-4'>
                                            <label htmlFor="expiryDate">Expiry Date</label>
                                            <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" placeholder='CVV' className='border p-2 w-full rounded' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    {/* Order Summary Section */}
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div>
                        {cart.products.length > 0 ? (
                            cart.products.map((product, index) => (
                                <div key={index} className='flex items-center justify-between mb-4'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-cover mr-4' />
                                    <div>
                                        <h4 className='font-semibold'>{product.name}</h4>
                                        <p>&#8377;{product.price} x {product.quantity}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-semibold'>Total Price</span>
                        <span className='font-semibold'>&#8377;{cart.totalPrice ? cart.totalPrice.toFixed(2) : '0.00'}</span>
                    </div>
                    <button className='w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg' onClick={handleOrder}>Place Order</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
