import Footer from "./Footer";
import Navbar from "./header/Navbar";
import Head from 'next/head'
const Layout = ({ children,title }) => {
    return (
        <>
        <Head>
        <title>{title}</title>
        </Head>
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
        </>
    );
}
 
export default Layout;