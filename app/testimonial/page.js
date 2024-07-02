import React from 'react';
import Image from 'next/image';

import  cus1  from '../assets/img/testimonial/testimonial-1.png';
import cus2 from '../assets/img/testimonial/testimonial-2.png';
import cus3 from '../assets/img/testimonial/testimonial-3.png';
import cus4 from '../assets/img/testimonial/testimonial-4.png';
import cus5 from '../assets/img/testimonial/testimonial-5.png';
import cus6 from '../assets/img/testimonial/testimonial-6.png'


export default function Testimonial() {
  return (
	<div>
    <section id="testimonial" className="testimonial-section img-bg pt-150 pb-40">
			 <div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-title mb-60 text-center">
							<span className="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
							<h1 className="wow fadeInUp" data-wow-delay=".4s">What Our Users Says</h1>
						</div>
					</div>
				</div>

				<div className="row testimonial-wrapper">
					<div className="col-lg-4 col-md-6 -mt-30">
						<div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
							<div className="rating">
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
							</div>
							<div className="info">
								<div className="image">
									<Image src={cus1} alt="customer"/>
								</div>
								<div className="text">
									<h5>Ena Shah</h5>
									<p>Teacher at Abc School</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 -mt-60">
						<div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
							<div className="rating">
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
							</div>
							<div className="info">
								<div className="image">
									<Image src={cus2} alt=""/>
								</div>
								<div className="text">
									<h5>Mrs. Gosh</h5>
									<p>Actor</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
							<div className="rating">
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
							</div>
							<div className="info">
								<div className="image">
									<Image src={cus3} alt="customer"/>
								</div>
								<div className="text">
									<h5>John Doe</h5>
									<p>Model</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 -mt-30">
						<div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
							<div className="rating">
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
							</div>
							<div className="info">
								<div className="image">
									<Image src={cus4} alt="customer"/>
								</div>
								<div className="text">
									<h5>Jonathan Smith</h5>
									<p>Creative Designer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 -mt-60">
						<div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
							<div className="rating">
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
							</div>
							<div className="info">
								<div className="image">
									<Image src={cus5} alt="customer" />
								</div>
								<div className="text">
									<h5>Sara A. K.</h5>
									<p>Heroine</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
							<div className="rating">
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
								<i className="lni lni-star-filled"></i>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
							</div>
							<div className="info">
								<div className="image">
									<Image src={cus6} alt="customer" />
								</div>
								<div className="text">
									<h5>David Smith</h5>
									<p>Businessman</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> 

		</section>
		</div>
  )
}
