'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../../assets/img/profile/download.png';
import { signout } from '../../redux/slices/loginSlice';
import { useRouter } from 'next/navigation';
import useMarchant from '@/app/lib/hooks/marchant';
import Label from '../label/Label';



export default function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const login = useSelector((state)=>state.loginReducer)

  const isLogin = login.login

  const marchant = useMarchant()

  // console.log(marchant)

  useEffect(()=>{
    if(!isLogin.log)
    !isLogin && router.push('/signin')

  },[isLogin,router])


  useEffect(() => {
    if (marchant != null) {
      setName(marchant.name)
      setMobile(marchant.mobile)
    }
  }, [marchant])



  const signMeOut = () => {
    localStorage.clear()
    console.log("called signout ")
    dispatch(signout())
    router.push("/signin")

  }

  return (
    <div>

      <Image id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer" src={profile} alt="User dropdown" />


      <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>
           <Label  title = {name} />
          </div>
          {/* <div className="font-medium truncate">{mobile}</div> */}
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
          <li>
            <Link href="/merchant" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
          </li>
          <li>
            <Link href="/place-order" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Place Order</Link>
          </li>
          {/* <li>
            <Link href="/bulk-order" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bulk Order</Link>
          </li> */}
          <li>
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
          </li>
          <li>
            <Link href="/payment-method" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Payment Method</Link>
          </li>
          <li>
            <Link href="/password" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Password</Link>
          </li>
          <li>
            <Link href="/payment-history" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Statement</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</Link>
          </li>
        </ul>
        <div className="py-1" style={{ cursor: 'pointer' }} >
          <a onClick={signMeOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </a>
        </div>
      </div>
    </div>
  )
}
