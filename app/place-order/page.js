'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArea, weighrRanges } from '@/app/redux/slices/areaSlice';
import { createOrder } from '@/app/redux/slices/marchantSlice';
import { orderNumber, getOrdersFromDash } from '../redux/slices/orderSlice';
import Sidebar from '../components/sidebar/Sidebar';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Select from '../components/select/Select';
import Textarea from '@/app/components/textarea/Textarea';
import { BiBookContent, BiSmile, BiCheck, BiPrinter } from "react-icons/bi";
import useMarchant from '@/app/lib/hooks/marchant';
import { useRouter } from 'next/navigation';
import Loading from '../components/loading/Loading';
import styles from './page.style';
import Link from 'next/link';
import Image from 'next/image';

import crossImage from '../assets/img/logo/again.jpg'



const re = /^(01[3-9])\d{8}$/

export default function NewRequest() {
	const dispatch = useDispatch()
	const router = useRouter();
	const selectdata = useSelector((state) => state.areaReducer.data)
	const [waight, setWaight] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [isError, setIsError] = useState(false)
	const [msg, setMsg] = useState("")
	const [weightId, setWeightId] = useState(1)
	const [deliveryCharge, setDeliveryCharge] = useState(60)
	const [productPrice, setProductPrice] = useState(0)
	// const [cod,setCod] = useState(0)
	const [receivable, setReceivable] = useState(0)
	const [referenceId, setReferenceId] = useState("")

	const data = useSelector((state) => state.loginReducer.data.data)

	const merchant = useMarchant()

	console.log("marchant ==", merchant.shop)

	const [userField, setUserField] = useState({
		name: "",
		mobile: "",
		area: "",
		address: "",
		note: ""
	});



	useEffect(() => {
		dispatch(fetchArea())
		dispatch(weighrRanges()).then(function (e) {
			if (e.payload.success) {
				setWaight(e.payload.data)
			}
		})
	}, [dispatch]);





	const calculateCharge = (e) => {
		const { value } = e.target
		const _value = value.split(",")
		const id = _value[0]

		const _charge = _value[2] //id < 2 ? 45 : 60 + (id - 2) * 25

		setWeightId(id)
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
		setUserField({
			...userField,
			[e.target.name]: e.target.value
		});

	}

	const _submit = () => {
		setIsLoading(true)

		const option = {
			merchant_id: data.id,
			area_id: userField.area,
			weight_range_id: parseInt(weightId),
			note: userField.note,
			customer_name: userField.name,
			customer_address: userField.address,
			customer_mobile: userField.mobile,
			delivery_charge: deliveryCharge,
			product_price: productPrice,


		}

		if (userField.name == "" || userField.mobile == "" || userField.area == "" || userField.address == "") {

			setThisError(true, "Please fill all the required fields")
			setIsLoading(false)
		}
		else if (productPrice <= 0) {
			setThisError(true, "Enter Product Price")
			setIsLoading(false)
		}
		else if (!re.test(userField.mobile)) {
			setThisError(true, "Place 11 digit mobile number")
			setIsLoading(false)
		}
		else {
			// new
			// setIsLoading(false)

			// old
			setThisError(false, "")
			dispatch(createOrder(option)).then(function (e) {
				console.log(e.payload)
				if (e.payload.success) {
					// setReferenceId( e.payload.order && e.payload.order.reference_id)
					// setReceivable(e.payload.order && parseInt(e.payload.order.delivery_charge)+parseInt(e.payload.order.product_price))
					// setSuccess(true)
					setIsLoading(false)
					_changeMyPage(0, 'New Orders')
				}
				else {
					setThisError(false, "Try Later ")
				}

			})
		}


	}

	const setThisError = (flag, msg) => {
		setIsError(flag)
		setMsg(msg)
	}

	const _changeMyPage = (_var, _name) => {
		let option = "merchant_id=" + merchant.id + "&status=" + 0


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

					<div className="col-lg-8">
						<div className="about-content">
							{
								success ?
									<div style={styles.successPart} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
										<div className="section-title" style={styles.border}>
											<Label title={merchant.shop}
												image={<BiBookContent />}
											/>
											
											<br />

										</div>
										<div style={styles.successPartDiv}>
											<div>
												<div style={{
													marginBottom: 10,
													fontWeight: 'bold'
												}}>
													Shipping Address :
												</div>
												<div>
													{userField.name}
												</div>
												<div>
													{userField.mobile}
												</div>
												<div>
													{userField.address}
												</div>
											</div>
											<div style={styles.innerSuccessPart}>
												<span>	Order Id # {referenceId} </span>
												<span>	COD :  {receivable}</span>
											</div>

											<div>
												{/* Status : New Order  */}
											</div>

										</div>
										{/* <Link href="/place-order" >Place order </Link> */}

									</div>
									:


									<div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
										<div className="w-full max-w-xs">


											<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
												<div className="section-title">

													<span className="wow fadeInUp" data-wow-delay=".2s"
														style={{ color: 'red' }}>

														<Label title='Place Order'
															image={<BiBookContent />}
														/>

													</span>
													<p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
												</div>


												<div className='mb-3' style={{
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'space-between'
												}}>
													<div className='mb-3'>
														<Label title={'Pick Address  '} />
													</div>
													<div className='mb-3' style={styles.address}>
														{data && data.shop_address}
													</div>

													<Link href="/profile">
														<span style={styles.change}>Change</span>
													</Link>


												</div>

												<div className='mb-3'>
													<div className='mb-3'>
														<Label title='Customer Name' required />
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
														<Label title='Customer Phone' required />
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
														<Label title='Customer Area' required />
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
														<Label title='Customer full Address' required />
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
														selected="0 ~ 1  kg"
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
												{/* COD */}
												<div className='mb-3' style={styles.codRoot} >
													<div className='mb-3'>
														<Label title='Payment Method' />
													</div>

													<div style={styles.cod}> <BiCheck size={20} /> Cash On Delivery</div>

												</div>
												<div className='mb-3' >
													{/* submit button */}

													{
														isLoading &&
														<div style={{ display: 'flex', justifyContent: 'center' }}>
															<Loading />
														</div>
													}
													<div
														style={{
															margin: 5,
															fontFamily: 'times new roman',
															letterSpacing: 1.0,
															color: isError ? 'red' : '#0cdf0c'
														}}
													>{msg}
													</div>
													<div style={{
														display: 'flex',
														justifyContent: 'flex-end'
													}}>
														
														<Button
															// class="btn btn-warning btn-lg text-light"
															text={"Place Order   "}
															onclick={_submit}
														/>
													</div>

												</div>
												
											</form>
											

										</div>
									</div>
							}

						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
