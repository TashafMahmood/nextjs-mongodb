'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteProduct = ({ id }) => {
    const router = useRouter()
    const deleteProduct = async () => {
        let res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE"
        })
        res = await res.json()
        if (res.success) {
            alert("Product deleted successfully")
            router.push('/products')
        }
    }
    return (
        <button onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteProduct
