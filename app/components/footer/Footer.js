import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import  img from '../../assets/img/logo/logo.svg';


export default function Footer() {
  return (
    <footer id="footer" className="footer pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
							<div className="logo">
								<a href="index.html"><Image src={img} alt="logo"/></a>
							</div>
							{/* <div className="download-btns">
								<a href="#">
									<span className="icon"><i className="lni lni-apple"></i></span>
									<span className="text">Download on the <b>App Store</b> </span>
								</a>
								<a href="#">
									<span className="icon"><i className="lni lni-play-store"></i></span>
									<span className="text">GET IT ON <b>Play Store</b> </span>
								</a>
							</div> */}
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
							<h3>About Us</h3>
							<ul className="links">
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
								<Link className="page-scroll" href="/services">Services</Link>
								</li>
								<li>
								<Link className="page-scroll" href="/about">About</Link>
								</li>
								<li>
								<Link className="page-scroll" href="/">Contact</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="footer-widget wow fadeInUp" data-wow-delay=".6s">
							<h3>About</h3>
							<ul className="links">
								<li>
									<a href="#">Partners</a>
								</li>
								<li>
									<a href="#">Terms of Service</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">Refund Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="footer-widget wow fadeInUp" data-wow-delay=".8s">
							<h3>Support</h3>
							<ul className="links">
								<li>
									<a href="#">Open Ticket</a>
								</li>
								<li>
									<a href="#">Community</a>
								</li>
								<li>
									<a href="#">Return Policy</a>
								</li>
								<li>
									<a href="#">Accessibility</a>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</footer>
  )
}
