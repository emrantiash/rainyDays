'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '@/app/redux/slices/categorySlice';
import { fetchArea } from '@/app/redux/slices/areaSlice';
import { updateMarchant } from '@/app/redux/slices/marchantSlice';
import Label from '@/app/components/label/Label';
import Input from '@/app/components/input/Input';
import Select from '@/app/components/select/Select';
import Textarea from '@/app/components/textarea/Textarea';
import Button from '@/app/components/button/Button';
import { ImProfile } from "react-icons/im";
import styles from './page.style';
import useMarchant from '@/app/lib/hooks/marchant';
import RightBar from '@/app/components/rightBar/RightBar';
import Sidebar from '@/app/components/sidebar/Sidebar';

// const my_store_local = JSON.parse(localStorage.getItem('user'))
// const my_store = Object.values(my_store_local)

export default function Page() {
    const marchant = useMarchant()
    const dispatch = useDispatch();
    const [update, setUpdate] = useState(false)
    const [message ,setMessage] = useState("")
    const business_category = useSelector((state) => state.categoryReducer);
    const business_area = useSelector((state) => state.areaReducer);
    const selectdata = business_category.data && business_category.data
    const areadata = business_area.data
    const data = useSelector((state) => state.profileReducer)

    const [param, setParam] = useState(data.data.payload);

    // console.log(marchant)
    // console.log(my_store)
    // const [userField, setUserField] = useState({
    //     name: marchant &&  marchant.name,// my_store[1],
    //     category: marchant.category_id ,// my_store[2],
    //     shop: marchant.shop,//        my_store[3],
    //     area:  my_store[4],
    //     address: marchant.shop_address // my_store[5]
    // });

    const [name,setName ] = useState("")
    const [category , setCategory] = useState("")
    const [categoryName , setCategoryName] = useState({})
    const [shop,setShop] = useState("")
    const [area,setArea] = useState("")
    const [areaName,setAreaName] = useState({})
    const [address,setAddress] = useState("")
    const [id,setId] = useState("")

    const _myarea = useState()

    useEffect(()=>{
        // const merchant = useMarchant()
        setName(marchant.name)
        setCategoryName(marchant.category)
        setCategory(marchant.category_id)
        setArea(marchant.area_id)
        setAreaName(marchant.area)
        setShop(marchant.shop)
        setAddress(marchant.shop_address)
        setId(marchant.id)
        
    },[marchant.name, marchant.category, marchant.category_id, marchant.area_id, marchant.area, marchant.shop, marchant.shop_address, marchant.id])

   

    // remove when build
    // const storage_local = () => {
    //     const my_store_local = JSON.parse(localStorage.getItem('user'))
    //     const my_store = Object.values(my_store_local)
    // }


    useEffect(() => {
        //  storage_local()
        dispatch(fetchCategory())
        dispatch(fetchArea())


    }, [dispatch]);



    const handleInputChange = (e) => {
        const { id, name, value } = e.target;
        if (id === param) {
            if (id === "area") {
                let mark = value.split(",")
                var areaValue = mark[0]
            }
            if (id === "category") {
                let mark = value.split(",")
                var areaValue = mark[0]
            }
            setUserField({
                ...userField,
                [e.target.name]: id === "area" || id === "category" ? areaValue : e.target.value
            });
        }

    }

    // console.log(userField)

    const updateThisMarchant = () => {
        //  console.log("====updated value ==",userField)
        const body = {
            "id": marchant.id,// my_store[0],
            "name": name,
            "category_id": parseInt(category),
            "shop": shop,
            "area_id": parseInt(area),
            "shop_address": address,
            "status": 1,
            "flag": 1,

        }
        dispatch(updateMarchant(body)).then(function (e) {
            // console.log(e)
            if (e.payload && e.payload.success) {
                setUpdate(true)
                setMessage("Data Updated Successfully.")
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


                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="section-title">

                                            <span className="wow fadeInUp" data-wow-delay=".2s"
                                                style={{ color: 'red' }}>

                                                <Label
                                                    title='Change Profile'
                                                    image={<ImProfile />}
                                                />

                                            </span>
                                            <p className="wow fadeInUp" data-wow-delay=".16s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                            {
                                                update &&
                                                <div style={styles.successMsg} data-wow-delay=".2s">{message}</div>
                                            }
                                        </div>

                                        {
                                            param === "name" &&
                                            <div className='mb-3'>
                                                <div className='mb-3'>
                                                    <Label
                                                        required
                                                        title='Name' />
                                                </div>
                                                <Input
                                                    value={name}
                                                    required
                                                    type="text"
                                                    onChange={(e) => handleInputChange(e)}
                                                    id="name"
                                                    name="name"
                                                    spellcheck={false}
                                                />
                                            </div>
                                        }
                                        {
                                            param === 'category' &&
                                            <div className='mb-3' >
                                                <div className='mb-3'>
                                                    <Label title='Business Catagory' required />
                                                </div>
                                                <Select
                                                    selected={categoryName && categoryName.name}
                                                    onChange={(e) => handleInputChange(e)}
                                                    id="category"
                                                    name="category"
                                                    data={selectdata}
                                                />
                                            </div>
                                        }
                                        {
                                            param === 'shop' &&
                                            <div className='mb-3' >
                                                <div className='mb-3'>
                                                    <Label title='Shop' required />
                                                </div>
                                                <Input
                                                    value={shop}
                                                    type="text"
                                                    onChange={(e) => handleInputChange(e)}
                                                    id="shop"
                                                    name="shop"
                                                    spellcheck={false}
                                                />
                                            </div>
                                        }
                                        {
                                            param === 'area' &&
                                            <div className='mb-3' >
                                                <div className='mb-3'>
                                                    <Label title='Shop Area' required />
                                                </div>
                                                <Select
                                                    selected={areaName && areaName.name}
                                                    onChange={(e) => handleInputChange(e)} id="area"
                                                    name="area"
                                                    data={areadata}
                                                />
                                            </div>
                                        }
                                        {
                                            param === 'address' &&
                                            <div className='mb-3' >
                                                <div className='mb-3'>
                                                    <Label title='Shop Address' required />
                                                </div>
                                                <Textarea
                                                    // value={address}
                                                    placeholder="Leave your address here"
                                                    onChange={(e) => handleInputChange(e)}
                                                    id="address"
                                                    name="address"
                                                    spellcheck={false}
                                                />
                                            </div>
                                        }

                                        <div className='mb-3' >
                                            {/* submit button */}

                                            <Button
                                               width = {'100%'}
                                                background = "#E97409"
                                                text={"Update !"}
                                                onclick={updateThisMarchant}
                                            // style={regdata.data.success && { disabled }}
                                            />

                                        </div>


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
