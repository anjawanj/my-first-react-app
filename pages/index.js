import Link from 'next/link'
import styles from '../styles/product.module.css'

export default function Home() {
  return (
    <ul className={styles.addProduct}>
      <li className={styles.customMargin}>
        <Link href="/welcome">Home</Link>
      </li>
      <li className={styles.customMargin}>
        <Link href="/user">Users</Link>
      </li>
      <li className={styles.customMargin}>
        <Link href="/productList">Products</Link>
      </li>
      <li className={styles.customMargin}>
        <Link href="/product">Add Product</Link>
      </li>
    </ul>
  )
}

