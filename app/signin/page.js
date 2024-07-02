'use client';
import React, { useState, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { marchantLogin } from '../redux/slices/loginSlice';
import aboutImage from '../assets/img/signin/login.jpg';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Toast from '../components/toast/Toast';
import Button from '../components/button/Button';
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from './page.style';
import { useRouter } from 'next/navigation';
import cookiesNames from '../utils/constant/Constant';
const CryptoJS = require("crypto-js");


const re = /^(01[3-9])\d{8}$/

export default function Signin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const data = useSelector((state) => state.loginReducer)

    const [userField, setUserField] = useState({
        mobile: "",
        password: ""
    });

    const [errorMsg, setErrorMsg] = useState("")
    const [iserror, setIserror] = useState(false)

    useEffect(() => {
        const diff = cookieCutter.get(cookiesNames.LOG_IN) && router.replace("/merchant")
    }, [data.login,router]);



    const changeUserFieldHandler = (e) => {
        errorHandler(false, "")
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });

    }

    const errorHandler = (flag, msg) => {
        setIserror(flag)
        setErrorMsg(msg)


    }



    const makeLogin = async () => {
        errorHandler(false, "")
        const test = re.test(userField.mobile)
        if (userField.mobile != "" && userField.password != "" && test) {
            dispatch(marchantLogin(userField)).then(function (e) {
                if (e.payload && e.payload.success) {
                    setIserror(false)
                    localStorage.setItem('user', JSON.stringify(e.payload.data))
                    localStorage.setItem('login', true)
                    const encrypted = CryptoJS.AES.encrypt(e.payload.token, process.env.NEXT_PUBLIC_TITLE).toString();
                    cookieCutter.set(cookiesNames.AUTH_X_MIT_DELIVER_20, true)  // for middleware 
                    cookieCutter.set(cookiesNames.LOG_IN, true) // login status
                    cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, encrypted) //token   
                    cookieCutter.set(cookiesNames.MARCHANT_USER,e.payload.data)                 
                    router.replace("/merchant")
                }
                else if (e.payload && !e.payload.success) {
                    errorHandler(true, e.payload.message)
                }

                else {

                    errorHandler(true, data.msg)

                    return <Signin />
                }


            })
        }

        else {
            errorHandler(true, "Wrong input formate")



        }

    }

    return (

        <section id="about" className="about-section pt-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="about-img wow fadeInUp" data-wow-delay=".5s">
                            <Image src={aboutImage} alt="" />
                        </div>
                        <Toast />

                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">

                            <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                                <div className="w-full max-w-xs">
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="section-title">
                                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#de7ac9' }}>
                                                Log in &nbsp;
                                                <BiLogInCircle color={'#de7ac9'} size={30} />
                                            </span>
                                            <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                        </div>
                                        {
                                            data.isLoading &&
                                            <div style={styles.loading}>
                                                <AiOutlineLoading3Quarters size={30} />
                                            </div>
                                        }
                                        {
                                            iserror &&
                                            <div style={styles.errorMsg} className="about-img wow fadeInUp" data-wow-delay=".01s">{errorMsg}</div>
                                        }
                                        {/* username */}
                                        <div className='mb-3'>
                                            <div className='mb-3'>
                                                <Label title='User Name' />
                                            </div>
                                            <Input
                                                type="text"
                                                name="mobile"
                                                onChange={(e) => changeUserFieldHandler(e)}
                                            />
                                        </div>
                                        {/* password */}
                                        <div className='mb-3' >
                                            <div className='mb-3'>
                                                <Label title='Password' />
                                            </div>
                                            <Input
                                                type="password"
                                                name="password"
                                                onChange={(e) => changeUserFieldHandler(e)}
                                            />
                                        </div>
                                        <div className='mb-3' style={styles.goRight}>
                                            {/* submit button */}

                                            <Button
                                            width = {'100%'}
                                                type="button"
                                                text={"Log in"}
                                                onclick={makeLogin}
                                            />
                                            <Link href="/sign-up">
                                                <Button
                                                identity
                                                    className="btn btn-link"
                                                    text={"Dont have acouunt ? Please register"}
                                                />
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {
                data.isLoading &&
                <div>is loading........</div>
            }
        </section>
    )
}
