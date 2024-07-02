"use client";

import Image from 'next/image';
import Link from 'next/link';
import img from './assets/img/hero/hero-img.svg';
import shape from './assets/img/hero/hero-shape.svg';
import Service from './services/page';
import About from './about/page';
import HowItWorks from './howitworks/page';
import Testimonial from './testimonial/page';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="home" className="hero-section">
        {/* <div className="hero-shape">
          <Image src={shape} alt="" className="shape" />
        </div> */}
        <div className="container-fluid" style={{backgroundColor : ''}}>
          <div className="row  align-items-center" >
            <div className='col-lg-2 '>
              <div className=' wow d-none d-md-block'>
                <Image src={shape} alt=""  />
              </div>
            </div>
            <div className='col-lg-1 '></div>
            <div className="col-lg-4">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Potential Use Cases for the Sentence Generator
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Generating a random sentence can be a great way to start a skit or improv. Just like with writing prompts, set our generator to whatever parameters you prefer and come up with a few random sentences
                </p>
                <Link
                  href="/signin"
                  rel="nofollow"
                  className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="col-lg-5 " style={{backgroundColor : '',margin:0,padding:0}}>
              <div className="hero-img wow d-none d-md-block margin 0 padding 0 " data-wow-delay=".5s">
                <Image className='' src={img} alt="hero-image"  />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero-shape">
          <Image src={shape} alt="" className="shape" />
        </div> */}
      </section>
      <Service />
      <About />
      <HowItWorks />
      <Testimonial />

      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </main>
  )
}
