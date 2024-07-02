'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArea } from '@/app/redux/slices/areaSlice';
import { createOrder } from '@/app/redux/slices/marchantSlice';
import Sidebar from '../../components/sidebar/Sidebar';
import Label from '../../components/label/Label';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Select from '../../components/select/Select';
import Textarea from '@/app/components/textarea/Textarea';
import { BiBookContent, BiSmile } from "react-icons/bi";
import useMarchant from '@/app/lib/hooks/marchant';

const waight = [
	{
		id: 1,
		name: "0 ~ 0.5 kg",
		amount: 45
	},
	{
		id: 2,
		name: "0 ~ 1  kg",
		amount: 60
	},
	{
		id: 3,
		name: "1 ~ 2  kg",
		amount: 85
	},
	{
		id: 4,
		name: "2 ~ 3  kg",
		amount: 110
	},
	{
		id: 5,
		name: "3 ~ 4  kg",
		amount: 135
	},
	{
		id: 6,
		name: "4 ~ 5  kg",
		amount: 160
	}
]

const re = /^(01[3-9])\d{8}$/

export default function NewRequest() {
	const marchant = useMarchant()
	const dispatch = useDispatch()
	const selectdata = useSelector((state) => state.areaReducer.data);
	const [isError,setIsError] = useState(false)
	const [msg,setMsg] = useState("")
	const [weight, setWeight] = useState(1)
	const [deliveryCharge, setDeliveryCharge] = useState(60)
	const [productPrice, setProductPrice] = useState(0)
	const [receivable, setReceivable] = useState(0)
	const [shop, setShop] = useState("")
	const [pickArea, setPickArea] = useState("")
	const [pickAddress, setPickAddress] = useState("")

	const [userField, setUserField] = useState({
		name: "",
		mobile: "",
		area: "",
		address: "",
		note: ""
	});

	// console.log(marchant)

	useEffect(() => {

		dispatch(fetchArea())

	}, [dispatch]);

	useEffect(() => {
		if (Object.keys(marchant).length > 0) {
			// setThisMarchant(marchant)
			setShop(marchant.shop)
			setPickArea(marchant.area.name)
			setPickAddress(marchant.shop_address)
		}


	}, [marchant])



	const calculateCharge = (e) => {
		const { value } = e.target
		const _value = value.split(",")
		const id = _value[0]

		const _charge = id < 2 ? 45 : 60 + (id - 2) * 25

		setWeight(id)
		setDeliveryCharge(_charge)
		setReceivable(parseInt(productPrice) + parseInt(deliveryCharge))
	}

	const getProductPrice = (e) => {
		const _value = e.target.value
		setProductPrice(_value)
		setReceivable(parseInt(_value) + parseInt(deliveryCharge))
	}

	useEffect(() => {
		setReceivable(parseInt(productPrice) + parseInt(deliveryCharge))
	}, [productPrice, deliveryCharge])

	const setReceiverArea = (e) => {
		const { value } = e.target
		const area_id = value.split(",")[0]
		console.log(area_id)
		setUserField({
			...userField,
			'area': area_id
		})
	}

	const changeUserFieldHandler = (e) => {
		// errorHandler(false, "")
		setUserField({
			...userField,
			[e.target.name]: e.target.value
		});

	}

	const _submit = () => {
		
		// console.log("product price", productPrice, "delivery charge==", deliveryCharge, "receivable", receivable, "waight==", weight)
		const option = {
			merchant_id: marchant.id,
			area_id: userField.area,
			weight_range_id: parseInt(weight),
			note : userField.note,
			customer_name : userField.name,
			customer_address : userField.address,
			customer_mobile : userField.mobile,
			delivery_charge : deliveryCharge,
			product_price : productPrice,


		}
		console.log(option, userField)
		if(userField.name == "" || userField.mobile == "" || userField.area == "" || userField.address == ""  ){

			setThisError(true,"Please fill all the required fields")
		}
		else if(productPrice <=0){
			setThisError(true,"Enter Product Price")
		}
		else if(!re.test(userField.mobile)){
			setThisError(true,"Place 11 digit mobile number")
		}
		else{
			setThisError(false,"")
			dispatch(createOrder(option)).then(function(e){
				console.log(e)
				if(e.payload.success){
					setUserField({
						name : "",mobile: "",area : "" ,address : ""
					})
					setThisError(false,"Successfully order placed")
				}
				else{
					setThisError(false,"Try Later ")
				}
				
			})
		}

		
	}

	const setThisError = (flag,msg) =>{
		setIsError(flag)
		setMsg(msg)
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

												<Label title='New Order'
													image={<BiBookContent />}
												/>

											</span>
											<p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
										</div>
										{/* Marchant Shop */}
										<div className='mb-3'>
											<div className='mb-3'>
												<Label title={'Shop : ' + shop} />
											</div>

										</div>
										{/* Marchant Pick-Up Area */}
										<div className='mb-3'>
											<div className='mb-3'>
												<Label title={'Pick Area :' + pickArea} />
											</div>

										</div>
										{/* Marchant Pick-Up Address */}
										<div className='mb-3'>
											<div className='mb-3'>
												<Label title={'Pick Address :  ' + pickAddress} />
											</div>

										</div>
										{/* Quantity */}
										{/* <div className='mb-3'>
											<div className='mb-3'>
												<Label title='Quantity' />
											</div>
											<Input
												type="number"
												value = "1"
												onChange = {handleInputChange}
												
											/>
										</div> */}
										{/* Receiver Name */}
										<div className='mb-3'>
											<div className='mb-3'>
												<Label title='Receiver Name' required />
											</div>
											<Input
												type="text"
												name="name"
												onChange={(e) => changeUserFieldHandler(e)}
											/>
										</div>
										{/* Receiver Phone */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Receiver Phone' required />
											</div>
											<Input
												type="text"
												name="mobile"
												onChange={(e) => changeUserFieldHandler(e)}
											/>
										</div>
										{/* Receiver Area */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Receiver Area' required />
											</div>

											<Select
												data={selectdata}
												name="area"
												onChange={(e) => setReceiverArea(e)}
											/>

										</div>
										{/* Receiver Address */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Receiver full Address' required />
											</div>

											<Textarea
												name="address"
												onChange={(e) => changeUserFieldHandler(e)}
											/>

										</div>

										{/* Product charge */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Product Price' required />
											</div>

											<Input
												type="number"
												onChange={(e) => getProductPrice(e)}
											/>

										</div>
										{/* Product Waight */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Product Waight' required />
											</div>

											<Select
											 selected = "0 ~ 1  kg"
												data={waight}
												onChange={(e) => calculateCharge(e)}
											/>

										</div>
										{/* Delivery Charge */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Delivery Charge' />
											</div>

											<Input
												value={deliveryCharge}
												disabled={true}
											/>

										</div>

										{/* Total Receivable */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Total Receivable' />
											</div>

											<Input
												//  onChange={(e) => changeUserFieldHandler(e)}
												disabled={true}
												value={receivable}
											/>

										</div>
										{/* Receiver Address */}
										<div className='mb-3' >
											<div className='mb-3'>
												<Label title='Note' />
											</div>

											<Textarea
												name="note"
												onChange={(e) => changeUserFieldHandler(e)}
											/>

										</div>
										<div className='mb-3' >
											{/* submit button */}
											<div
											style={{margin : 5,
												fontFamily:'times new roman',
												letterSpacing : 1.0,
												color :isError ? 'red' : '#0cdf0c' 
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
