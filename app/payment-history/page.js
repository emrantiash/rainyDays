'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../components/sidebar/Sidebar';
import Label from '../components/label/Label';
import Link from '../components/link/Link';
import { useRouter } from 'next/navigation';
import { paymentHistory } from '../redux/slices/paymentSlice';
import styles from './page.style';
import RightBar from '../components/rightBar/RightBar';
import Loading from '../components/loading/Loading';
import useMarchant from '../lib/hooks/marchant';
import { BiBorderAll, BiBookOpen, BiSolidContact, BiBriefcaseAlt } from "react-icons/bi";
import Card from '../components/card/Card';

// {"id":18,"name":"WeDeliver","business_category_id":7,"shop":"Shop 1","area_id":5,"shop_address":"22,Mohammadpur","mobile":"01768009215","status":1,"flag":1}'

export default function Page() {
    const router = useRouter();
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [dataset, setDataset] = useState([])
    const [msg, setMsg] = useState("")
    const [month, setMonth] = useState("")

    const merchant = useMarchant()


    useEffect(() => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const d = new Date();
        setMonth(month[d.getMonth()])
        dispatch(paymentHistory()).then(function (e) {
            if (e.payload.success) {
                setIsLoading(false)
                setDataset(e.payload.data)
            }
        })

    }, [dispatch])

    const _getDeliveryDate = (_array) =>{
        var _date = ""
        _array.map((data,index)=>{
           if(data.id==7){
            _date =  data.pivot.created_at
           }
        }
        
        )
        return _getDateFormate(_date)
    }


    const _getDateFormate = (_date) =>{
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
var now = new Date(_date);
//(days[now.getDay()] + ' ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear()); //Tuesday February 12 2013
return months[now.getMonth()] + ' ' + now.getDate() 
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

                    <div className="col-lg-6">
                        <div className="about-content">
                            {
                                isLoading &&
                                <Loading />
                            }
                            <span className="wow fadeInUp" data-wow-delay=".2s"
                                style={{ color: 'red', marginBottom: 10 }}>
                                <Label
                                    className='badge bg-success text-wrap'
                                    title={month}
                                    image={<BiBriefcaseAlt color="white" size={30} />}
                                />
                            </span>

                            <ul role="list" className="divide-y divide-gray-100">
                                {
                                    Array.isArray(dataset) && dataset.length > 0 &&
                                    dataset.map((data, index) =>
                                        <Card key={index} text={
                                            <li className="flex justify-between gap-x-6 py-3 shadow-2xl" style={styles.container}>
                                                <div className="flex min-w-0 gap-x-4" style={{ backgroundColor: '' }}>

                                                    <div className="min-w-0 flex-auto" >
                                                        <div style={styles.innerBlock}>
                                                            <div>
                                                                <p className="text-sm font-semibold leading-6 text-gray-900" style={styles.fontSize}>Reference Id# <span
                                                                    style={styles.reference}>{data.order.reference_id}</span> </p>
                                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500" style={styles.fontSize}>
                                                                    <BiBookOpen size={25} /> Order Created : {_getDateFormate(data.order.created_at)}
                                                                </p>
                                                            </div>
                                                            <div style={styles.codSection}>COD :{data.paid_to_merchant} </div>
                                                        </div>
                                                        <p className="text-sm leading-6 text-gray-900" style={styles.fontSize}>
                                                            <BiBorderAll size={25} />Order Delivered :  {_getDeliveryDate(data.order.statuses)}</p>

                                                            <div style={styles.innerBlock}>
                                                            <div>
                                                            <p className="text-sm font-semibold leading-6 text-gray-900" style={styles.fontSize}>Price# <span
                                                                    style={styles.reference}>{data.order.product_price}</span> </p>
                                                            </div>
                                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500" style={styles.fontSize}>Payment : {_getDateFormate(data.paid_to_merchant_date)} </p>
                                                        </div>


                                                    </div>
                                                </div>

                                               
                                            </li>
                                        }
                                        />
                                    )

                                }


                            </ul>
                        </div>
                    </div>


                    {/* <div className="col-lg-4">
                        <div className="about-content">
                            <RightBar />
                        </div>
                    </div> */}


                </div>
            </div>
        </section >
    )
}
