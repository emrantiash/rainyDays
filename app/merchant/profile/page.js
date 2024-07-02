'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {profileStore} from '@/app/redux/slices/profileSlice';
import Sidebar from '../../components/sidebar/Sidebar';
import Label from '../../components/label/Label';
import Link from '../../components/link/Link';
import { useRouter } from 'next/navigation';
import { ImProfile } from "react-icons/im";
import styles from './Page.style';

// {"id":18,"name":"WeDeliver","business_category_id":7,"shop":"Shop 1","area_id":5,"shop_address":"22,Mohammadpur","mobile":"01768009215","status":1,"flag":1}'

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.loginReducer.data)
  const my_store_local = JSON.parse(localStorage.getItem('user'))
  const my_store = Object.values(my_store_local)
  const [name, setName] = useState(localStorage.getItem('login') ? my_store[1] : data.name);
  const [category, setCategory] = useState(localStorage.getItem('login') ? my_store[9].name : data.business_category_id);
  const [shop, setShop] = useState(localStorage.getItem('login') ? my_store[3] : data.shop);
  const [area, setArea] = useState(localStorage.getItem('login') ? my_store[10].name : data.area);
  const [address, setAddress] = useState(localStorage.getItem('login') ? my_store[5] : data.shop_address);
  const [mobile, setMobile] = useState(localStorage.getItem('login') ? my_store[6] : data.mobile);



  const handleInputChange = (e,val) => {
    dispatch(profileStore(e))
    router.replace("/cprofile")

  }
  return (
    <section id="about" className="about-section pt-150 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <Sidebar />
            </div>

          </div>

          <div className="col-lg-6">
            <div className="about-content">

              <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                <div className="w-full max-w-xs">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="section-title">

                      <span className="wow fadeInUp" data-wow-delay=".2s"
                        style={{ color: 'red' }}>

                        <Label
                          title='Profile'
                          image={<ImProfile />}
                        />

                      </span>
                      <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                    <table className="table table-striped" style={styles.sideBox}>
                      <thead>

                      </thead>
                      <tbody>
                        <tr style={styles.tr}>
                          <td>Name</td>
                          <td>:</td>
                          <td>{name}</td>
                          <td>
                            <Link name="name" text="change" value={name} click={handleInputChange} />

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Business</td>
                          <td>:</td>
                          <td>{category}</td>
                          <td>
                            <Link name="category" text="change" value={category} click={handleInputChange}/>

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Shop</td>
                          <td>:</td>
                          <td>{shop}</td>
                          <td>
                            <Link name="shop" text="change" value={shop} click={handleInputChange}/>

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Area</td>
                          <td>:</td>
                          <td>{area}</td>
                          <td>
                            <Link name="area" text="change" value={area} click={handleInputChange}/>

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Address</td>
                          <td>:</td>
                          <td>{address}</td>
                          <td>
                            <Link name="address" text="change"  value={address} click={handleInputChange}/>

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Mobile</td>
                          <td>:</td>
                          <td>{mobile}</td>
                        </tr>

                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
