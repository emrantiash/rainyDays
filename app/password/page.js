'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '@/app/redux/slices/marchantSlice';
import Sidebar from '../components/sidebar/Sidebar';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import { RiLockPasswordFill } from "react-icons/ri";
import styles from '../cprofile/page.style';


export default function CPasswrd() {
    const dispatch = useDispatch();
    const [changeMsg, setChangeMsg] = useState("")
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const [userField, setUserField] = useState({
        oldpassword: "",
        newpassword: "",
        confirm: ""
    });

    const handleInputChange = (e) => {

        const { id, name, value } = e.target;

        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });

    }

    const submit = () => {
        setError(false)
        setErrorMsg("")

        if(userField.oldpassword == "" || userField.newpassword == "" || userField.change == ""){
            setError(true)
            setErrorMsg("Fill all the field.")
        }
        else if(userField.newpassword !== userField.confirm){
            setError(true)
            setErrorMsg("New password and confirm password don't match")
        }
        else 
        {
            const body = {
                current_password : userField.oldpassword,
                password : userField.newpassword,
                password_confirmation : userField.confirm
            }

            dispatch(changePassword(body)).then(function (e) {
                console.log(e.payload.success,e.payload.message)
                if (e.payload && e.payload.success) {
                    setError(false)
                    setChangeMsg(e.payload.message)
                }
                else{
                    setError(true)
                    setErrorMsg(e.payload.message)
                }
            })
        }

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
                                    {/* <div style={{}}>{regdata.data.message}</div> */}
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="section-title">

                                            <span className="wow fadeInUp" data-wow-delay=".2s"
                                                style={{ color: 'red' }}>

                                                <Label
                                                    title='Change Password'
                                                    image={<RiLockPasswordFill />}
                                                />

                                            </span>
                                            <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                        </div>
                                        {
                                            error && 
                                            <div style={styles.errorMsg}>{errorMsg}</div>
                                        }
                                        {
                                            changeMsg != "" && 
                                            <div style={styles.successMsg}>{changeMsg}</div>
                                        }
                                        <div className='mb-3'>
                                            <div className='mb-3'>
                                                <Label
                                                    required
                                                    title='Old Password' />
                                            </div>
                                            <Input
                                                required
                                                type="password"
                                                onChange={(e) => handleInputChange(e)}
                                                id="oldpassword"
                                                name="oldpassword"
                                                spellcheck={false}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <div className='mb-3'>
                                                <Label
                                                    required
                                                    title='New Password' />
                                            </div>
                                            <Input

                                                required
                                                type="password"
                                                onChange={(e) => handleInputChange(e)}
                                                id="newpassword"
                                                name="newpassword"
                                                spellcheck={false}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <div className='mb-3'>
                                                <Label
                                                    required
                                                    title='New Password' />
                                            </div>
                                            <Input

                                                required
                                                type="password"
                                                onChange={(e) => handleInputChange(e)}
                                                id="confirm"
                                                name="confirm"
                                                spellcheck={false}
                                            />
                                        </div>
                                        {/* submit button */}

                                        <Button
                                            type="button"
                                            class="btn btn-success btn-lg text-light"
                                            text={"Submit !"}
                                            onclick={submit}
                                            background

                                        />
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
