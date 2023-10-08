import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return(
    <>
    <Header/>
    <main className="container mx-auto">{children}</main>
    <Footer/>
    </>

  )
}

export default Layout
