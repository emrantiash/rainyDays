'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCategory } from '../redux/slices/categorySlice';
import { fetchArea } from '../redux/slices/areaSlice';
import { cusRegistration } from '../redux/slices/registrationSlice';
import aboutImage from '../assets/img/signin/login.jpg';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Textarea from '../components/textarea/Textarea';
import Toast from '../components/toast/Toast';
import Button from '../components/button/Button';
import Select from '../components/select/Select';
import ErrorToast from '../components/toast/Error';
import styles from './page.style';
import { BiBookHeart,BiCheck } from "react-icons/bi";



// const re = /(01[3-9]\d{8})$ /;
const re = /^(01[3-9])\d{8}$/

export default function Signup() {
    const dispatch = useDispatch();
    const business_category = useSelector((state) => state.categoryReducer);
    const business_area = useSelector((state) => state.areaReducer);
    const areadata = business_area.data
    const selectdata = business_category.data && business_category.data

    
    const regdata = useSelector((state) => state.registrationReducer)


    const [data, setdata] = useState(false);
    const [error, setError] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const [name, setName] = useState('');
    const [categoryid, setCategoryid] = useState(0);
    const [category, setCategory] = useState('');
    const [shop, setShop] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileValidate, setMobileValidate] = useState(false);
    const [areaid, setAreaid] = useState(0);
    const [area, setArea] = useState('');
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchArea())

    }, [dispatch]);


    useEffect(() => {
        if (errorMsg == "" && name != "" && category != "" && shop != "" && mobile != "" && area != "" && address != "" && password != "" && mobileValidate) {
            setError(false)
        }

        if (errorMsg != "" || name == "" || category == "" || shop == "" || mobile == "" || area == "" || address == "" || password == "" || !mobileValidate) {
            setError(true)
        }
    },[errorMsg, name, category, shop, mobile, area, address, password, mobileValidate])



    const handleInputChange = (e) => {

        const { id, value } = e.target;
        console.log(id, value)

        if (id === "name") {
            setName(value);
        }
        if (id === "category") {
            let mark = value.split(",")
            setCategoryid(mark[0]);
            setCategory(mark[1]);
        }
        if (id === "shop") {
            setShop(value);
        }
        if (id === "mobile") {
            setErrorMsg("")
            const test = re.test(value)
            if (test) {
                setMobileValidate(true);
                setMobile(value);
                setErrorMsg("")
            }

            else {
                setMobileValidate(false);
                setErrorMsg(" Wrong Mobile number formate")
            }

        }
        if (id === "area") {
            let mark = value.split(",")
            setAreaid(mark[0]);
            setArea(mark[1]);
        }
        if (id === "address") {
            setAddress(value);
        }
        if (id === "password") {
            setPassword(value);
        }

    }


    const continueReg = () => {
        setdata(true)

    }

    const submitReg = async (e) => {
        const body = {
            name: name,
            category_id: parseInt(categoryid),
            shop: shop,
            area_id: parseInt(areaid),
            shop_address: address,
            mobile: mobile,
            password: password,
            status: 1,
            flag: 1,

        }
        dispatch(cusRegistration(body))

    }



    return (
        <section id="about" className="about-section pt-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {
                            !data &&
                            <div className="about-img wow fadeInUp" data-wow-delay=".5s">
                                <Image src={aboutImage} alt="regImage" />
                            </div>
                        }

                        {
                            data &&


                            <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                                <div className='mb-3'>
                                    <Label title='Name'

                                    />
                                    <Toast
                                        text={name}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <Label title='category' />
                                    <Toast
                                        text={category}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <Label title='Shop' />
                                    <Toast
                                        text={shop}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <Label title='Shop Area' />
                                    <Toast
                                        text={area}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <Label title='Shop Address' />
                                    <Toast
                                        text={address}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <Label title='Mobile' />
                                    <Toast
                                        text={mobile}
                                    />
                                </div>

                            </div>


                        }



                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">

                            <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                                <div className="w-full max-w-xs">

                                    
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        {
                                            !data &&

                                            <div>
                                                <div className="section-title">
                                                    <span className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#dacb2a' }}>
                                                        <BiBookHeart />&nbsp;
                                                        Registration

                                                    </span>
                                                    <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                </div>
                                                {/* name */}
                                                <div className='mb-3'>
                                                    <div className='mb-3'>
                                                        <Label
                                                            required
                                                            title='Name' />
                                                    </div>
                                                    <Input
                                                        required
                                                        type="text"
                                                        onChange={(e) => handleInputChange(e)}
                                                        id="name"
                                                        spellcheck={false}
                                                    />
                                                </div>
                                                {/* catagory */}
                                                <div className='mb-3' >
                                                    <div className='mb-3'>
                                                        <Label title='Business Catagory' required />
                                                    </div>
                                                    <Select
                                                        onChange={(e) => handleInputChange(e)} id="category"
                                                        data={selectdata}
                                                    />
                                                </div>
                                                {/* shop */}
                                                <div className='mb-3' >
                                                    <div className='mb-3'>
                                                        <Label title='Shop' required />
                                                    </div>
                                                    <Input
                                                        type="text"
                                                        onChange={(e) => handleInputChange(e)}
                                                        id="shop"
                                                        spellcheck={false}
                                                    />
                                                </div>
                                                {/* shop area*/}
                                                <div className='mb-3' >
                                                    <div className='mb-3'>
                                                        <Label title='Shop Area' required />
                                                    </div>
                                                    <Select
                                                        onChange={(e) => handleInputChange(e)} id="area"
                                                        data={areadata}
                                                    />
                                                </div>
                                                {/* shop Address*/}
                                                <div className='mb-3' >
                                                    <div className='mb-3'>
                                                        <Label title='Shop Address' required />
                                                    </div>
                                                    <Textarea
                                                        value={address}
                                                        placeholder="Leave your address here"
                                                        onChange={(e) => handleInputChange(e)}
                                                        id="address"
                                                        spellcheck={false}
                                                    />
                                                </div>
                                                {/* Mobile */}
                                                <div className='mb-3' >
                                                    <div className='mb-3'>
                                                        <Label title='Mobile' required />
                                                    </div>
                                                    <Input
                                                        type="text"
                                                        onChange={(e) => handleInputChange(e)}
                                                        id="mobile"
                                                        spellcheck={false}
                                                        length={true}
                                                        lengthSize={11}
                                                    />
                                                </div>
                                                <div className='mb-3' >
                                                    <div>{errorMsg}</div>
                                                </div>

                                                {/* Password */}
                                                <div className='mb-3' >
                                                    <div className='mb-3'>
                                                        <Label title='Password' required />
                                                    </div>
                                                    <Input
                                                        type="password"
                                                        onChange={(e) => handleInputChange(e)}
                                                        id="password"
                                                        spellcheck={false}
                                                    />
                                                </div>





                                                <div className='mb-3' >
                                                    {/* submit button */}

                                                    <Button
                                                        type="button"
                                                        class={error ? "btn btn-danger btn-lg text-light" : "btn btn-warning btn-lg text-light"}
                                                        text={error ? "Not Ready" : "Continue"}
                                                        onclick={continueReg}
                                                        // disabled={error ? true : false}
                                                        disabled={false}

                                                    />

                                                </div>
                                            </div>
                                        }

                                        {/* OTP */}
                                        {
                                            data ?

                                                !regdata.success ?

                                                    <div>
                                                        <div className='mb-3'>
                                                            <Label title='OTP' />
                                                        </div>
                                                        <div className='d-flex flex-row mb-3'>
                                                            <Input type="text" /><Input type="text" /><Input type="text" /><Input type="text" />

                                                        </div>
                                                        <div className='mb-3' >
                                                            {/* submit button */}

                                                            <Button
                                                                type="button"
                                                                class="btn btn-warning btn-lg text-light"
                                                                text={"Submit"}
                                                                onclick={submitReg}
                                                            // style={regdata.data.success && { disabled }}
                                                            />

                                                        </div>

                                                    </div>
                                                    :
                                                    <div >

                                        <BiCheck size={90} color='#5afd0d' />&nbsp;
                                        <div style={styles.box}>
                                            <div style={styles.successMsg}>{regdata.data.message}</div>
                                            <Link
                                            style={{
                                                // display  : 'flex',
                                                // justifyContent : 'flex-end',
                                                fontSize : 14,
                                                color : 'red'
                                            }}
                                                href="/signin"
                                                rel="nofollow"
                                                className="btn-hover wow fadeInUp" data-wow-delay=".6s">
                                                Sign in
                                                
                                            </Link>
                                        </div>

                                    </div>
                                                : null
                                        }
                                    </form>

                                    <div className="single-testimonial wow fadeInUp" data-wow-delay="1.9s" style={{
                                        letterSpacing: 1.0,
                                        color: 'green'
                                    }}>
                                        {/* {regdata.data} */}
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
