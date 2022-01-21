import Footer from "./Footer";
import SideBar from "./navbar";
import Head from "next/head";

const LayoutAdmin = ({ children,title }) => {
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="content">
                <SideBar/>
                    {children}
                <Footer/>
            </div>
        </>
    )
}
export default LayoutAdmin