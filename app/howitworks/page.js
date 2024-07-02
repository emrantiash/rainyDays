import React from 'react';
import Image from 'next/image';
import deliveryImage from '../assets/img/delivery/delivery.jpg';

export default function HowItWorks() {
  return (
	<div>
    <section id="how" className="delivery-section pt-150">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="delivery-content">
							<div className="section-title">
								<span className="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
								<h1 className="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 30mins</h1>
								<p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore hdht dolore magna aliquyam erat, sed diam voluptua.</p>
								{/* <a href="" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".8s">Download App</a> */}
							</div>
						</div>
					</div>
					<div className="col-lg-6 order-first order-lg-last">
						<div className="delivery-img wow fadeInUp" data-wow-delay=".5s">
							<Image src={deliveryImage} alt="customer"/>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
  )
}
