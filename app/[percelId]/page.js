'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersFromDash } from '../redux/slices/orderSlice';
import Sidebar from '../components/sidebar/Sidebar';
import Node from '../components/node/Node';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import { FaRegUserCircle, FaMobileAlt, FaAddressCard, FaShopify, FaUserClock } from "react-icons/fa";



export default function Page({ params }) {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(params.percelId)
  const [dataset, setDataset] = useState([])
  const [statusArray, setStatusArray] = useState([])
  const [createdAt, setCreatedAt] = useState("")

  useEffect(() => {
    makeTheAPICall()

  })

  useEffect(() => {
    const _array =Array.isArray(dataset)
    const length = dataset.length > 0
   

    dataset.map((data) => {
      setCreatedAt(data.created_at)
      setStatusArray(data.statuses)
    })

  }, [dataset])

  const makeTheAPICall = () => {
    let option = "reference_id=" + inputValue

    dispatch(getOrdersFromDash(option)).then(function (e) {
      if (e.payload && e.payload.success) {
        setDataset(e.payload.data)
      }
    })
  }

  const _changeValue = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const _getDateFormate = (_date) => {
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
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            {/* nodes here---  */}
            <div className="about-content">
              <div className="section-title">
                <span className="wow fadeInUp" data-wow-delay=".2s" style={{
                  // backgroundColor : 'red',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around'
                }}>
                  <Input value={inputValue} length lengthSize={'50%'}
                    onChange={(e) => _changeValue(e)}
                  />
                  <Button text="Submit" onclick={makeTheAPICall} />

                </span>
                {/* <h1 className="wow fadeInUp" data-wow-delay=".4s">On-time Delivery and Customer Satisfaction</h1>
								<p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p> */}
              </div>
              <div className=" wow fadeInUp mb-20" data-wow-delay=".8s" >
                <div className="card border-left-primary shadow h-100 py-2" style={{ marginBottom: 10 }}>
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-normal text-primary  mb-1">
                          Ship To :
                        </div>

                        {
                          dataset.map((data, index) =>
                            <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
                              <span><FaRegUserCircle color="#DC4C56" /> {data.customer_name}</span>
                              <span><FaMobileAlt color="#DC4C56" /> {data.customer_mobile} </span>
                              <span><FaAddressCard color="#DC4C56" />  {data.customer_address} </span>
                            </div>

                          )
                        }


                      </div>
                      <div className="col-auto">
                        {
                          dataset.map((data, index) =>
                            <div key={index}>COD:TK {parseFloat(data.product_price) + parseFloat(data.delivery_charge)}</div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-left-primary shadow h-100 py-2" style={{ marginBottom: 10 }}>
                  <div className="card-body">
                    <h5 className="card-title">Merchant</h5>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        {
                          dataset.map((data, index) =>
                            <div key={index}><FaShopify color="orange" />{data.merchant_shop}</div>
                          )
                        }
                      </div>

                    </div>
                    <hr />
                    <h5 className="card-title">Assign To</h5>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        {
                          dataset.map((data, index) =>
                            <div key={index}><FaUserClock color="green" /> {data.delivery_officer_name}</div>
                          )
                        }
                      </div>

                    </div>
                  </div>
                </div>
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <h5 className="card-title" style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>Percel Steps</h5>
                    <hr />
                    {/* <Node date="Dec 24 34:23:00" text="Received in warehouse" />
                    <Node date="Dec 24 34:23:00" text="Percel picked" flag={true} /> */}
                    {
                      Array.isArray(dataset) && dataset.length > 0 && Array.isArray(statusArray) && statusArray.length > 0 &&
                      statusArray.map((data,index) =>
                        <Node key={index} date={_getDateFormate(data.created_at)} text={data.status_id == 0 ? "Delivery Request Created" : ""} />
                      )

                    }
                    {/* {
                      Array.isArray(dataset) && dataset.length > 0 &&
                      <Node date={_getDateFormate(createdAt)} text="Delivery ordered created" flag={statusArray.length > 0 ? true : false} />
                    } */}

                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
