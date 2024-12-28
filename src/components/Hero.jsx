import React from 'react'

function Hero() {
  return (
    <>
    <section className="main-section"><br />
        <img src="../../public/logo_light.svg" alt="React Logo" width="100"/>
        <h1>React</h1>
        <p className='fw-medium'>The library for web and native user interfaces</p>
        <div>
            <a href="#" className="btn btn-custom rounded-pill fw-medium px-4 fs-5" >Learn React</a>
            <a href="#" className="btn btn-outline-secondary mx-2 rounded-pill fw-bolder px-3  fs-5">API Reference</a>
        </div>
    </section>
    </>
  )
}
export default Hero
