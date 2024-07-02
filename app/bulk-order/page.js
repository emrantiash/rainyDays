'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBulkOrder } from '@/app/redux/slices/marchantSlice';
import Sidebar from '../components/sidebar/Sidebar';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Button from '../components/button/Button';;
import { BiBookContent, BiSmile } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import styles from './page.style';
import Loading from '../components/loading/Loading';
import Excel from '../components/excel/Excel';


export default function NewRequest() {
	const router = useRouter()
	const dispatch = useDispatch()
	const [isError,setIsError] = useState(false)
	const [msg,setMsg] = useState("")
	const data = useSelector((state) => state.marchantReducer)
    const isLoading =  data.isLoading
    console.log(data)
	const [userField, setUserField] = useState({
		quantity : 0
	});

	

	const changeUserFieldHandler = (e) => {
		setUserField({
			...userField,
			[e.target.name]: e.target.value
		});

	}

	const _submit = () => {
        setMessage(false,"")
		
		const option = {
			merchant_id: data.id,
			quantity: parseInt(userField.quantity),
			

		}
        console.log(option)
		
        if(userField.quantity > 0){
            dispatch(createBulkOrder(option)).then(function(e){
                if(e.payload && e.payload.success)
                setMessage(false,e.payload.message + "  with quantity "+option.quantity)
                else if(e.payload && !e.payload.success )
                setMessage(false,e.payload.message)
                else
                setMessage(true ,"Something Went Wrong..")
            })
        }
        else{
            setMessage(true ,"Enter Quantity Number")
        }
		
	}

	const setMessage = (flag,msg) =>{
		setIsError(flag)
		setMsg(msg)
        setUserField({
            quantity : 0
        })
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

												<Label title='Bulk Order'
													image={<BiBookContent />}
												/>

												<Excel />

											</span>
											<p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
										</div>
                                        {
                                            isLoading &&
                                            <Loading />
                                        }
                                        {/* Marchant Pick-Up Area */}
                                        <div className='mb-3' style={{
											display : 'flex',
											flexDirection : 'row',
											justifyContent  : 'space-between'
										}}>
											<div className='mb-3'>
												<Label title={'Pick Address  '} />
											</div>
											<div className='mb-3' style={styles.address}>
											{data.shop_address}
											</div>


										</div>
										<div className='mb-3'>
											<div className='mb-3'>
												<Label title="Quantity" />
											</div>

											<Input 
                                            value={userField.quantity}
                                            name = "quantity"
											type="number"
                                            onChange={(e) => changeUserFieldHandler(e)}
											/>

										</div>
										
										
										<div className='mb-3' >
											{/* submit button */}
											<div
											style={{margin : 5,
												
												letterSpacing : 1.0,
												color :isError ? 'red' : 'green' 
											}}
											>{msg}</div>

											<Button
												class="btn btn-warning btn-lg text-light"
												text={"Place Order   "}
												onclick={_submit}
											/>

										</div>
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
