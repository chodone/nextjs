import Link from 'next/link'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={styles.productNav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/men">남성옷</Link>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
