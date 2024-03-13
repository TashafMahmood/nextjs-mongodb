import React from 'react'

export async function getProducts() {
    let products = await fetch('http://localhost:3000/api/products')
    products = await products.json()
    return products.data;
}


const Page = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1>Products Page</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Color</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, id) => (
                            <>
                                <tr key={id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.company}</td>
                                    <td>{product.color}</td>
                                    <td>{product.category}</td>
                                </tr></>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Page
