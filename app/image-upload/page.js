'use client'
import React, { useState } from 'react'

const Page = () => {
    const [file, setFile] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.set("file", file);
        const result = await fetch('api/upload', {
            method: "POST",
            body: data
        })
    }
    return (
        <div>
            <h2>Image upload in NEXTJS</h2>
            <br />
            <br />
            <form onSubmit={onSubmit}>
                <input type='file' name='file' onChange={e => setFile(e.target.files?.[0])} />
                <br />
                <button type='submit'>Upload Image</button>
            </form>
        </div>
    )
}

export default Page
