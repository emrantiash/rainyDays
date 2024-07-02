'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cookieCutter from 'cookie-cutter';
import Sidebar from '../components/sidebar/Sidebar';
import { useRouter } from 'next/navigation';
import { getMarchantDashboard } from '../redux/slices/marchantSlice';
import { orderNumber, getOrdersFromDash } from '../redux/slices/orderSlice';
import cookiesNames from '../utils/constant/Constant';
import Loading from '../components/loading/Loading';
import useMarchant from '../lib/hooks/marchant';
import styles from './page.style';
import Card from '../components/card/Card';
import RightBar from '../components/rightBar/RightBar';
import { BsClipboardPlus, BsBack, BsAppIndicator, BsAward, BsBalloon, BsBalloonFill, BsBag } from "react-icons/bs";

export default function Marchant() {
  const router = useRouter();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.loginReducer)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [payable, setPayable] = useState(0)
  const [totalReceived, setTotalReceived] = useState(0)
  // const data = useSelector((state) => state.marchantReducer.data)

  const merchant = useMarchant()



  useEffect(() => {
    // dispatch(getMarchant())
    dispatch(getMarchantDashboard()).then(function (e) {
      console.log(e.payload)
      if (e.payload.success) {
        setTotalReceived(e.payload.amount_paid_to_merchant)
        setIsLoading(false)
        setData(e.payload.data)
        setPayable(e.payload.amount_to_pay_to_merchant)
      }
    })
  }, [dispatch])

  console.log(data)

  useEffect(() => {

    const diff = !cookieCutter.get(cookiesNames.LOG_IN) && router.replace("/signin")

  }, [user.login,router]);

  const _changeMyPage = (_var, _name) => {
    let option = "merchant_id=" + merchant.id + "&status=" + _var


    dispatch(getOrdersFromDash(option))
    // console.log(option)

    dispatch(orderNumber([_var, _name]))
    router.replace("/order")
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

          <div className="col-lg-5">
            <div className="about-content">
              {
                isLoading &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Loading />
                </div>
              }
              <div style={styles.insideContainer}>
                <Card text="Total Received" number={totalReceived} image={<BsAppIndicator size={30} />} />
                <Card text="Total Percel" number="50" image={<BsAward size={30} />} />
                <Card text="Review Pending" number="10" image={<BsBalloon size={30} />} />
              </div>
              <div className="counter-up wow fadeInUp mb-30" data-wow-delay=".8s " style={{
                // backgroundColor: '#ffff',
                color: '#000000',
                cursor: 'pointer'
              }}>
                <div className="single-counter" onClick={() => _changeMyPage(0, 'New Orders')}>
                  {/* <h3 id="secondo1" className="countup" cup-end="1" cup-append="M+">10 </h3> */}
                  <h3 id="secondo1" style={styles.number}> {data.status_0_count ? data.status_0_count : 0} </h3>
                  <h5 style={styles.text}>New Orders</h5>
                </div>
                <div className="single-counter position-relative" onClick={() => _changeMyPage(1, 'Orders Picked')}>
                  <h3 id="secondo2" style={styles.number}> {data.status_1_count ? data.status_1_count : 0} </h3>
                  <h5 style={styles.text}>Picked </h5>
                </div>
                <div className="single-counter" onClick={() => _changeMyPage(2, 'Orders Stored')}>
                  <h3 id="secondo3" style={styles.number} >{data.status_2_count ? data.status_2_count : 0}</h3>
                  <h5 style={styles.text}>Store</h5>
                </div>
              </div>
              <div className="counter-up wow fadeInUp mb-30" data-wow-delay=".8s " style={{ background: '#75924ccc', cursor: 'pointer' }}>
                <div className="single-counter" onClick={() => _changeMyPage(4, 'Local Hub')}>
                  <h3 id="secondo1" style={styles.number}>{data.status_4_count ? data.status_4_count : 0}</h3>
                  <h5>Local Hub</h5>
                </div>
                <div className="single-counter position-relative" onClick={() => _changeMyPage(6, 'Delivery Pending')}>
                  <h3 id="secondo2" style={styles.number}>{data.status_6_count ? data.status_6_count : 0}</h3>
                  <h5>Delivery Pending</h5>
                </div>
                <div className="single-counter" onClick={() => _changeMyPage(7, 'Delivered')}>
                  <h3 id="secondo3" style={styles.number}>{data.status_7_count ? data.status_7_count : 0} </h3>
                  <h5>Delivered</h5>
                </div>
              </div>
              <div className="counter-up wow fadeInUp mb-30" data-wow-delay=".8s " style={{ background: '#c57b2c', cursor: 'pointer' }}>
                <div className="single-counter">
                  {/* <h3 id="secondo1" className="countup" cup-end="1" cup-append="M+">10 </h3> */}
                  <h3 id="secondo1" style={styles.number}> {data.status_1_count} </h3>
                  <h5 style={styles.text}>Return </h5>
                </div>
                <div className="single-counter position-relative">
                  <h3 id="secondo2" style={styles.number}> {data.status_1_count} </h3>
                  <h5 style={styles.text}>Hold Order</h5>
                </div>
                <div className="single-counter">
                  <h3 id="secondo3" style={styles.number}>0</h3>
                  <h5 style={styles.text}>Damage</h5>
                </div>
              </div>



            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-content">

              {/* here */}
              <RightBar />

              <div data-wow-delay=".8s" style={{ marginTop: 20 }}>
                <div style={styles.insideContainer} data-wow-delay=".8s">
                  <Card text="Receivable" number={payable} image={<BsBack size={30} color="yellow" />} />
                  <Card text="Delivered" number={0} image={<BsBag size={30} color="green" />} />
                  <Card text="Review " number="0" image={<BsBalloonFill size={30} color="red" />} />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </section>

  )
}
