import React from 'react';
import Image from 'next/image';
import serviceIcon from '../assets/img/service/service-icon-1.svg';
import serviceIcon2 from '../assets/img/service/service-icon-2.svg';
import serviceIcon3 from '../assets/img/service/service-icon-3.svg';
import serviceIcon4 from '../assets/img/service/service-icon-4.svg';
import serviceIcon5 from '../assets/img/service/service-icon-5.svg';
import serviceIcon6 from '../assets/img/service/service-icon-4.svg';


export default function Service() {
  return (

             <section id="services" className="service-section pt-150">
			<div className="container">				
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<div className="section-title text-center mb-70">
							<span className="wow fadeInUp" data-wow-delay=".2s">Delivery Services</span>
							<h1 className="wow fadeInUp" data-wow-delay=".4s">All Essentials You Need</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-service wow fadeInUp" data-wow-delay=".2s">
							<div className="icon">
								<Image src={serviceIcon} alt="service icon"/>
							</div>
							<div className="content">
								<h3>Food</h3>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-service wow fadeInUp" data-wow-delay=".4s">
							<div className="icon">
								<Image src={serviceIcon2} alt="" />
							</div>
							<div className="content">
								<h3>Grocery</h3>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
							</div>
						</div>
					</div>
          <div className="col-lg-4 col-md-6">
						<div className="single-service wow fadeInUp" data-wow-delay=".6s">
							<div className="icon">
								<Image src={serviceIcon3} alt="" />
							</div>
							<div className="content">
								<h3>Furniture</h3>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-service wow fadeInUp" data-wow-delay=".2s">
							<div className="icon">
								<Image src={serviceIcon4} alt="" />
							</div>
							<div className="content">
								<h3>Medicine</h3>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-service wow fadeInUp" data-wow-delay=".4s">
							<div className="icon">
								<Image src={serviceIcon5} alt="" />
							</div>
							<div className="content">
								<h3>Electronics</h3>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
							</div>
						</div>
					</div>
          <div className="col-lg-4 col-md-6">
						<div className="single-service wow fadeInUp" data-wow-delay=".4s">
							<div className="icon">
								<Image src={serviceIcon6} alt="" />
							</div>
							<div className="content">
								<h3>Electronics</h3>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
							</div>
						</div>
					</div>
				

          </div>
          </div>
					
		</section>
    
  )
}
