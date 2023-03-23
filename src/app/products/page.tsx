import Link from "next/link";
import { getProducts } from "@/service/products";

export default async function ProductsPage() {
  const products = await getProducts()
  return (
    <>
      <h1>Products!</h1>
      <ul>
        {products.map(({id, name}, index) => (
          <li key={index}>
            <Link href={`/products/${id} `}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
