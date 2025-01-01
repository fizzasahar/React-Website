import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light ">
                <div className="container-fluid position-fixed top-0 bg-white pt-2 px-4">
                    <a className="navbar-brand fs-6 link-primary link-secondary" href="#">
                        <img src="/logo_light.svg" alt="React Logo" /> <a href="" className='text-dark mx-1 fs-6 text-body-secondary link-primary link-underline-light'>v19</a>
                    </a>


                    <div className="form w-50 ">
                        <i className="bi bi-search pb-2"></i>
                        <input type="text" className="form-control form-input rounded-pill bg-body-secondary text-body-tertiary" placeholder="  Search " />
                        <span className="left-pan pt-1"><button className='border border-0 rounded bg-body-tertiary text-body-tertiary'>ctrl</button>
                        <button className='border border-0 rounded mx-1 bg-body-tertiary text-body-tertiary'>k</button></span>
                    </div>


                    <a href="#" className="text-dark mx-2 fs-6 text-body-secondary link-primary link-underline-light">Learn</a>
                    <a href="#" className="text-dark mx-2 fs-6 text-body-secondary link-primary link-underline-light">Reference</a>
                    <a href="#" className="text-dark mx-2 fs-6 text-body-secondary link-primary link-underline-light">Community</a>
                    <a href="#" className="text-dark mx-2 fs-6 text-body-secondary link-primary link-underline-light">Blog</a>
                    <h3 className="bi bi-moon"></h3>
                    <img src="/translate.svg" alt="" className="fs-4" />
                    <h3 className="bi bi-github"></h3>

                </div>
            </nav>
        </>
    )
}

export default Navbar
