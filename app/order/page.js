'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersFromDash } from '../redux/slices/orderSlice';
import Image from 'next/image'
import Label from '../components/label/Label';
import { ImProfile } from "react-icons/im";
import Sidebar from '../components/sidebar/Sidebar'
import Loading from '../components/loading/Loading';
import styles from './page.style';
import { BiSolidUser, BiMobile, BiSolidContact, BiSolidCommentAdd } from "react-icons/bi";
import Link from 'next/link';
import Card from '../components/card/Card';


export default function Page() {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.orderReducer.number)
    const name = useSelector((state) => state.orderReducer.name)
    const data = useSelector((state) => state.orderReducer.data)
    const isLoading = useSelector((state) => state.orderReducer.isLoading)

    console.log(name, status)

    // merchant_id=1&status=1
    console.log(data)

    const width = status == 0 ? 0 : status == 1 ? 20 : status == 2 ? 40 : status == 4 ? 60 : status == 6 ? 80 : 100

    
  const _getDateFormate = (_date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
    var now = new Date(_date);
    
    return  now.getDate()  + ' ' + months[now.getMonth()] + ' ' + now.getFullYear()
  }

    return (
        <section id="about" className="about-section pt-150 pb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="about-content">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about-content">
                            <span className="wow fadeInUp" data-wow-delay=".2s"
                                style={{ color: 'red' }}>
                                <Label
                                    className='badge bg-success text-wrap'
                                    title={name}
                                    image={<ImProfile color="white" size={30} />}
                                />
                            </span>
                            <div className="progress" role="progressbar"
                                style={styles.progressBar}
                            >
                                {

                                }    <div className="progress-bar" style={{ width: width + '%' }}>{width}%</div>
                            </div>
                            <ul role="list" className="divide-y divide-gray-100">
                               {
                                    Array.isArray(data) && data.length > 0 &&
                                    data.map((data, index) =>
                                        <Card key={index} text={
                                        <li  className="flex justify-between gap-x-6 py-3 shadow-2xl" style={styles.container}>
                                            <div className="flex min-w-0 gap-x-4" style={{ backgroundColor: '' }}>

                                                <div className="min-w-0 flex-auto" >
                                                    <div style={styles.innerBlock}>
                                                        <div>
                                                            <p className="text-sm font-semibold leading-6 text-gray-900" style={styles.fontSize}>ReferenceId# <span
                                                                style={styles.reference}>{data.reference_id}</span> </p>
                                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500" style={styles.fontSize}>
                                                                <BiSolidUser /> {data.customer_name}
                                                            </p>
                                                        </div>
                                                        <div style={styles.codSection}>COD : {parseInt(data.product_price)+parseInt(data.delivery_charge)}</div>
                                                    </div>
                                                    <p className="text-sm leading-6 text-gray-900" style={styles.fontSize}>
                                                        <BiMobile /> {data.customer_mobile}</p>
                                                    <p className="mt-1 text-xs leading-5 text-gray-500" style={styles.fontSize}>
                                                        <BiSolidContact /> {data.customer_address}
                                                    </p>
                                                </div>
                                            </div>    
                                            {
                                                data.statuses.map((data, index) =>
                                                    <div style={styles.statusClass} key={index}>
                                                        <p className="text-sm leading-6 text-gray-900" style={styles.fontSize}>
                                                            <BiSolidCommentAdd />
                                                            <span style={styles.bold}>
                                                               
                                                                 {
                                                                 data.status_id == 0 ? " Order Created":
                                                                 data.status_id == 1 ? " Order Picked" : data.status}
                                                                 </span>
                                                        </p>

                                                        <p className="mt-1 text-xs leading-5 text-gray-500" style={styles.fontSize}>
                                                            <span style={styles.bold}>   {_getDateFormate(data.created_at)}</span>
                                                        </p>
                                                    </div>
                                                )
                                            }
                                          <div style={{
                                            display : 'flex',
                                            justifyContent : 'flex-end'
                                          }}>  <Link href={"/"+data.reference_id} ><span style={{
                                            color: 'gray'
                                          }}>Go To Link</span></Link></div>
                                        </li>
                                        }
                                        />
                                    )

                                }


                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
