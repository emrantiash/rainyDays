// components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import Logo from '../logo/Logo';
import { useSelector } from 'react-redux';
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const { login } = useSelector((state) => state.loginReducer);

  return (
    <>

      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Logo />
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="page-scroll" href="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/services">Services</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/howitworks">How It Works</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/testimonial">Testimonials</Link>
                      </li>
                          <li className="nav-item">
                            <Link id="dropdownNavbar" className="page-scroll" href="/merchant">Merchant</Link>


                          </li> 

                    </ul>
                  </div>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>




    </>

  );
};
export default Nav;
