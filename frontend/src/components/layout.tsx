import Header from "./header.tsx"
import Footer from "./footer.tsx"

type LayoutProps = { children: React.ReactNode; };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
