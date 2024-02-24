'use client'
import './merchendise.css'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
export default function Merchendise() {
    const tshirts = useMemo(function () {
        return [
            '/images/black_front.png',
            '/images/tshirt_front.png',
            '/images/tshirt_back.png',
            '/images/white_front.png',
            '/images/white_back.png',
        ]
    }, [])

    const tshirtsLen = useMemo(
        function () {
            return tshirts.length
        },
        [tshirts],
    )

    const [num, setNum] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCount = (num + 1) % tshirtsLen
            setNum(updatedCount)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [num])

    return (
        <div className='min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027]'>
            <div id='Image-Button-Container'>
                <div id='ImageHolder'>
                    {tshirts.map((src, idx) => (
                        <Image
                            key={src}
                            id={`tshirt${idx + 1}`}
                            src={tshirts[(num + idx) % tshirtsLen]}
                            height={300}
                            width={300}
                            alt='Picture of the author'
                        />
                    ))}
                </div>
                <div id='picPositions'>
                    {tshirts.map((_, idx) => (
                        <button
                            onClick={() => setNum(idx)}
                            key={idx}
                            style={{
                                backgroundColor:
                                    num === idx ? 'white' : 'purple',
                            }}
                            className='tshirtPosition'
                        />
                    ))}
                </div>
            </div>
            <div id='ButtonContainer'>
                <div className='text-white p-4'>Only at &#8377; 399</div>
                <Link className='text-white p-4' href='/merchandise/order'>
                    Click to Order
                </Link>
            </div>
        </div>
    )
}
