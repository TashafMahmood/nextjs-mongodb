'use client'
import React, { useState } from 'react'

const Page = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [company, setCompany] = useState('')
    const [category, setCategory] = useState('')

    const addProduct = async () => {
        const data = await fetch(`http://localhost:3000/api/products`, {
            method: "POST",
            body: JSON.stringify({ name, price, color, company, category })
        })
        console.log('Added successfully')
    }
    return (
        <div>
            <h1>Add product page</h1><br />
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
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default Page
