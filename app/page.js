import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Mongo DB Course</h1><br />
      <Link href={'/add-product'}>Add Product</Link><br />
      <Link href={'/products'}>Products</Link>
    </main>
  )
}
