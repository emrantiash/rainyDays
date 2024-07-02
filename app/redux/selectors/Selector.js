'use client';
import cookieCutter from 'cookie-cutter';
import cookiesNames from '@/app/utils/constant/Constant';
const CryptoJS = require("crypto-js");
import Utf8 from 'crypto-js/enc-utf8';

const check = localStorage.getItem('login')


export const getToken = check &&  CryptoJS.AES.decrypt( cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS), process.env.NEXT_PUBLIC_TITLE).toString(Utf8);