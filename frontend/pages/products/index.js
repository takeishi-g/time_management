import Link from "next/link"

const Products = () => {
  const path = "/products/addProduct/"
  const query = ""
  return(
    <div>
    <Link href={{ pathname: path, query: query}} as={path}>図面を登録</Link>
    </div>
  )
}

export default Products