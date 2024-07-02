import React from 'react';
import Image from 'next/image';
import aboutImage from '../assets/img/about/about.webp';

export default function About() {
  return (
    <section id="about" className="about-section pt-150">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
            <div className='col-md-9'>
						<div className="about-img wow fadeInUp" data-wow-delay=".5s">
							<Image src={aboutImage} alt=""/>
						</div>
            </div>
					</div>
					<div className="col-lg-6">
						<div className="about-content">
							<div className="section-title">
								<span className="wow fadeInUp" data-wow-delay=".2s">About Us</span>
								<h1 className="wow fadeInUp" data-wow-delay=".4s">On-time Delivery and Customer Satisfaction</h1>
								<p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
							<div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
								<h5>Rating 4.8</h5>
								<div className="rating">
									<i className="lni lni-star-filled"></i>
									<i className="lni lni-star-filled"></i>
									<i className="lni lni-star-filled"></i>
									<i className="lni lni-star-filled"></i>
									<i className="lni lni-star-filled"></i>
								</div>
							</div>

							<div className="counter-up wow fadeInUp mb-20" data-wow-delay=".8s">
								<div className="single-counter">
									<h3 id="secondo1" className="countup" cup-end="1" cup-append="M+">1 </h3>
									<h5>Download</h5>
								</div>
								<div className="single-counter position-relative">
									<h3 id="secondo2" className="countup" cup-end="234" cup-append="K+">234 </h3>
									<h5>Happy User</h5>
								</div>
								<div className="single-counter">
									<h3 id="secondo3" className="countup" cup-end="34" cup-append="K+">34 </h3>
									<h5>Reviews</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}
