'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMarchantProfile ,profileStore } from '@/app/redux/slices/profileSlice'; 
import Sidebar from '../components/sidebar/Sidebar';
import Label from '../components/label/Label';
import Link from '../components/link/Link';
import { useRouter } from 'next/navigation';
import { ImProfile } from "react-icons/im";
import styles from './Page.style';
import RightBar from '../components/rightBar/RightBar';
import Loading from '../components/loading/Loading';

// {"id":18,"name":"WeDeliver","business_category_id":7,"shop":"Shop 1","area_id":5,"shop_address":"22,Mohammadpur","mobile":"01768009215","status":1,"flag":1}'

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch()
  const [isLoading,setIsLoading] = useState(true)
  // const data = useSelector((state) => state.loginReducer.data)
  const my_store_local = JSON.parse(localStorage.getItem('user'))
  // const my_store = Object.values(my_store_local)
  const [dataset,setDataset] = useState([])
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [shop, setShop] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");


   useEffect(()=>{
    dispatch(getMarchantProfile()).then(function(e){
      if(e.payload && e.payload.success){
        setIsLoading(false)
        setDataset(e.payload.accountInfo)
        setName(e.payload.data.name)
        setCategory(e.payload.data.name)
        setShop(e.payload.data.shop)
        setArea(e.payload.data.area.name)
        setAddress(e.payload.data.shop_address)
        setMobile(e.payload.data.mobile)
      }
    })
   },[dispatch])

   console.log(dataset)


  const handleInputChange = (e, val) => {
   
    dispatch(profileStore(e))
    router.replace("/cprofile")

  }

  const _addMethodPage = () =>{
    router.replace("/payment-method")
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
                    {
                          isLoading && 
                          <Loading />
                        }
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
                            <Link name="category" text="change" value={category} click={handleInputChange} />

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Shop</td>
                          <td>:</td>
                          <td>{shop}</td>
                          <td>
                            <Link name="shop" text="change" value={shop} click={handleInputChange} />

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Area</td>
                          <td>:</td>
                          <td>{area}</td>
                          <td>
                            <Link name="area" text="change" value={area} click={handleInputChange} />

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Address</td>
                          <td>:</td>
                          <td>{address}</td>
                          <td>
                            <Link name="address" text="change" value={address} click={handleInputChange} />

                          </td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Mobile</td>
                          <td>:</td>
                          <td>{mobile}</td>
                        </tr>
                        <tr style={styles.tr}>
                          <td>Payment Method</td>
                          <td>:</td>
                          <td>{dataset.length == 0 && "No Method Added"}
                          {dataset.length == 0 ?
                          <span onClick={_addMethodPage}> Link </span>:
                          <div>
                          {
                            Array.isArray(dataset) && dataset.length >0 && 
                            dataset.map((data,index)=>
                            <div key={index}>
                             <span>{data.mobile_banking_name }</span> 
                             <span>({data.account_number})</span>
                            
                              </div>
                            )
                          }
                          </div>
                          }
                          </td>
                          <td>
                            {/* <Link name="area" text="change" value={area} click={handleInputChange} /> */}

                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </form>
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
    </section>
  )
}
