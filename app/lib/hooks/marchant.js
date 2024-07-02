'use strict';
import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';




export default function useMarchant() {
    const [marchant,setMarchant] = useState({})
    const data = useSelector((state) => state.loginReducer.data)
    useEffect(() => {
        setMarchant(data.data)
       
    },[data.data]);

    return marchant;
}
