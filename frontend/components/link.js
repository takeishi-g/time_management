import Link from "next/link";

const NavLink = (props) => {
  const { path, query, pathname } = props
  return (
    <div className="mr-5">
      <Link href={{ pathname: path, query: query}} as={path}>{pathname}</Link>
    </div>
  )
}

export default NavLink;