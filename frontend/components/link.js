import Link from "next/link";

const NavLink = (props) => {
  const { path, query, pathname } = props
  return (
    <Link href={{ pathname: path, query: query}} as={path}>{pathname}</Link>
  )
}

export default NavLink;