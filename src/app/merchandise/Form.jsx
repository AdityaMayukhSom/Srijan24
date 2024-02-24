'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Form() {
    const user = useSelector(state => state?.userReducer?.user)
    const [payment, setPayment] = useState('UPI')

    // /**
    //  *
    //  * @param {FormEvent} event
    //  */
    // function registerOrder(event) {
    //     event.preventDefault()
    //     event.stopPropagation()
    // }

    return (
        <div className='grid grid-rows-2 lg:grid-rows-1 grid-cols-1 md:grid-cols-2 py-12 items-center justify-center min-h-screen bg-gray-900 font-poppins'>
            {/* Image Section */}
            <div className=' bg-gray-900 flex justify-center items-center'>
                <img
                    src='/images/tshirt_front.png'
                    alt='Product Image'
                    className='max-w-full max-h-full'
                />
            </div>
            {/* Form Section */}
            <div className=' bg-gray-800 p-8 mx-10 shadow-lg text-white'>
                <h2 className='text-2xl font-bold mb-4 w-full text-center'>
                    Grab Your T-Shirts Now!
                </h2>
                <form
                    id='formData'
                    action='/api/order'
                    method='POST'
                    className='space-y-4'
                >
                    <input
                        type='hidden'
                        name='userAuthToken'
                        value={user.authTokenID}
                    />
                    <input type='hidden' name='userEmail' value={user.email} />
                    {/* Form Inputs */}
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='mb-1'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter Name'
                            className='w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='phoneNumber' className='mb-1'>
                            Phone Number
                        </label>
                        <input
                            type='number'
                            id='phoneNumber'
                            name='PhNumber'
                            placeholder='Enter Phone No.'
                            className='w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='college' className='mb-1'>
                            College
                        </label>
                        <input
                            type='text'
                            id='college'
                            name='college'
                            placeholder='Enter College'
                            className='w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                        />
                    </div>
                    <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-4'>
                        <div className='flex-1'>
                            <label htmlFor='department' className='mb-1'>
                                Department
                            </label>
                            <input
                                type='text'
                                id='department'
                                name='department'
                                placeholder='Enter Department'
                                className='w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                            />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor='year' className='mb-1'>
                                Year
                            </label>
                            <select
                                id='year'
                                name='year'
                                className='formDropdown w-full p-1 border border-gray-700 rounded-md bg-gray-700 text-white'
                            >
                                <option value='none' disabled hidden>
                                    Select Year
                                </option>
                                <option value='1st'>1st</option>
                                <option value='2nd'>2nd</option>
                                <option value='3rd'>3rd</option>
                                <option value='4th'>4th</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-4'>
                        <div className='flex-1'>
                            <label htmlFor='nameOnTshirt' className='mb-1'>
                                Name on Tshirt
                            </label>
                            <input
                                type='text'
                                id='nameOnTshirt'
                                name='nameOnTshirt'
                                placeholder='Enter Name on Tshirt'
                                className='w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                            />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor='size' className='mb-1'>
                                Size
                            </label>
                            <select
                                id='size'
                                name='size'
                                className='formDropdown w-full p-1 border border-gray-700 rounded-md bg-gray-700 text-white'
                            >
                                <option value='none' disabled hidden>
                                    Select Size
                                </option>
                                <option value='S'>S(38)</option>
                                <option value='M'>M(40)</option>
                                <option value='L'>L(42)</option>
                                <option value='XL'>XL(44)</option>
                                <option value='XXL'>XXL(46)</option>
                                <option value='XXXL'>XXXL(48)</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='payment' className='mb-1'>
                            Payment Mode
                        </label>
                        <select
                            id='payment'
                            name='payment'
                            value={payment}
                            onChange={e => setPayment(e.target.value)}
                            className='formDropdown w-full p-2 mb-3 border border-gray-700 rounded-md bg-gray-700 text-white'
                        >
                            <option value='none' disabled hidden>
                                Select Payment Mode
                            </option>
                            <option value='UPI'>UPI</option>
                            <option value='Cash'>Cash</option>
                        </select>

                        {payment === 'UPI' && (
                            <div className='flex flex-col'>
                                <label htmlFor='transactionID' className='mb-1'>
                                    Transaction ID
                                </label>
                                <input
                                    type='text'
                                    id='transactionID'
                                    name='transactionID'
                                    placeholder='Enter Transaction ID'
                                    className='w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                                />
                            </div>
                        )}
                        {payment === 'Cash' && (
                            <div className='flex flex-col'>
                                <label htmlFor='collector' className='mb-1'>
                                    Collector
                                </label>
                                <select
                                    id='collector'
                                    name='collector'
                                    className='formDropdown w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white'
                                >
                                    <option value='none' disabled hidden>
                                        Select Collector
                                    </option>
                                    <option value='Collector 1'>
                                        Collector 1
                                    </option>
                                    <option value='Collector 2'>
                                        Collector 2
                                    </option>
                                    <option value='Collector 3'>
                                        Collector 3
                                    </option>
                                </select>
                            </div>
                        )}
                    </div>
                    {/* Submit Button */}
                    <div className='flex justify-end'>
                        <button
                            id='submitOrder'
                            className='merchButtons bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-20 rounded'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
