'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
    const productId = params.editproduct
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [company, setCompany] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {

        let productData = await fetch(`http://localhost:3000/api/products/${productId}`)
        productData = await productData.json()
        const result = productData.result
        setName(result.name)
        setPrice(result.price)
        setColor(result.color)
        setCompany(result.company)
        setCategory(result.category)
    }

    return (
        <div>
            <h1>Update product page</h1><br />
            <input type='text' placeholder='Enter product name' value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <input type='text' placeholder='Enter product price' value={price} onChange={e => setPrice(e.target.value)} />
            <br />
            <br />
            <input type='text' placeholder='Enter product compay' value={company} onChange={e => setCompany(e.target.value)} />
            <br />
            <br />
            <input type='text' placeholder='Enter product color' value={color} onChange={e => setColor(e.target.value)} />
            <br />
            <br />
            <input type='text' placeholder='Enter product category' value={category} onChange={e => setCategory(e.target.value)} />
            <br />
            <br />
            <button>Update Product</button>
            <br />
            <br />
            <Link href={'/products'}>Go back</Link>
        </div>
    )
}

export default Page
