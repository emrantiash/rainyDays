'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../components/sidebar/Sidebar';
import Label from '../components/label/Label';
import Link from '../components/link/Link';
import { useRouter } from 'next/navigation';
import { getMobileBankingList,addThePaymentMethod } from '../redux/slices/paymentSlice';
import styles from './page.style';
import RightBar from '../components/rightBar/RightBar';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Loading from '../components/loading/Loading';
import Select from '../components/select/Select';
import useMarchant from '../lib/hooks/marchant';
import { BiBookContent, BiSmile, BiCheck, BiPrinter } from "react-icons/bi";

// {"id":18,"name":"WeDeliver","business_category_id":7,"shop":"Shop 1","area_id":5,"shop_address":"22,Mohammadpur","mobile":"01768009215","status":1,"flag":1}'

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [dataset,setDataset] = useState([])
  const [mobileBankingId,setMobileBankingId] = useState("")
  const [mobileNumber,setMobileNumber] = useState("")
  const [msg,setMsg] = useState("")

  const merchant = useMarchant()




  useEffect(() => {
    dispatch(getMobileBankingList()).then(function(e){
      if(e.payload.success){
        setDataset(e.payload.data)
      }
    })

  }, [dispatch])


  const _MobileBankingId = (e) => {

    const { value } = e.target
		const id = value.split(",")[0]
		setMobileBankingId(id)

  }

  const changeUserFieldHandler = (e) =>{

    setMobileNumber(e.target.value)

  }

  const _submit = () =>{
    setIsLoading(true)
    let option = {
      merchant_id : merchant.id,
      mobile_banking_id : mobileBankingId,
      account_number : mobileNumber
    }
    dispatch(addThePaymentMethod(option)).then(function(e){
      setIsLoading(false)
      if(e.payload.success){
        setMsg("Method Added Successfully")
      }
    })
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

              <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                <div className="w-full max-w-xs">

                  <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                    <div className="w-full max-w-xs">


                      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                        <div className="section-title">

                          <span className="wow fadeInUp" data-wow-delay=".2s"
                            style={{ color: 'red' }}>

                            <Label title='Payment Method'
                              image={<BiBookContent />}
                            />

                          </span>
                          <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                        <div style={{width:'60%',backgroundColor : ''}}>
                        <div className='mb-3' style={styles.innerDiv}>
                          <div className='mb-2'>
                          <Label title="Select Option "/>
                          </div>
                          <div className='mb-3' >
                          <Select 
                          selected = ""
                          bank
                          data={dataset}
                          onChange={(e) =>_MobileBankingId(e)}
                          />
                          </div>

                        </div>
                        <div className='mb-3' style={styles.innerDiv}>
                          <div className='mb-2'>
                          <Label title="Mobile Number"/>
                          </div>
                          <div className='mb-3' >
                          <Input
														type="text"
														name="mobile"
														onChange={(e) => changeUserFieldHandler(e)}
													/>
                          </div>
                        </div>
                        <div className='mb-3' style={styles.innerDiv}>
                        <div className='mb-3' style={{width:'100%'}}>
                          {
                            isLoading &&
                            <Loading />
                          }
                         
                          </div>
                         
                          <div className='mb-3' style={{width:'100%'}}>
                          <Button text="Add " 
                          onclick = {_submit}
                          width = {'100%'}/>
                          </div>
                        </div>
                        <div className='mb-3' style={styles.msg}>
                          {
                            msg
                          }
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        

        <div className="col-lg-4">
          <div className="about-content">
            <RightBar />
          </div>
        </div>


      </div>
    </div>
    </section >
  )
}
