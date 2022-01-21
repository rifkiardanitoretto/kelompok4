import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Portofolio</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <Link href='/'>   
                                    <a className="nav-link" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href='/about'>   
                                    <a className="nav-link" >About</a>
                                </Link>
                            </li>                                                
                            <li className="nav-item ">
                                <Link href='/contact'>   
                                    <a className="nav-link" >Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <Link href='/admin'>   
                                    <a className="nav-link" >Masuk</a>
                                </Link>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
