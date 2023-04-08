import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, categories }) {
  return (
    <div>
      <Navbar categories={categories} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
