import React from 'react'
import aboutImage from '../../assets/img/about/about.svg';
import styles from './RightBar.style';
import Link from 'next/link';
import { BsClipboardPlus    } from "react-icons/bs";
import Image from 'next/image';

export default function RightBar() {
  return (
    <div className="section-title" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <div style={styles.plus}> <Link href="place-order"> <BsClipboardPlus size={30} /></Link></div>
        <div className="about-img wow fadeInUp" data-wow-delay=".5s">
          <Image src={aboutImage} alt="" />

        </div>

      </div>
  )
}
