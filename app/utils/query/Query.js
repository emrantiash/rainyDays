import Network from '../network/Network';
import axios from 'axios';
import cookieCutter from 'cookie-cutter';
import cookiesNames from "@/app/utils/constant/Constant";
const CryptoJS = require("crypto-js");
import Utf8 from 'crypto-js/enc-utf8';


const getHeaderFunction = () =>{
  try {
    const decrypted = CryptoJS.AES.decrypt(cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS), process.env.NEXT_PUBLIC_TITLE).toString(Utf8);
    const
      headers = {
        Authorization: 'Bearer ' + decrypted,
        Accept: 'application/json',
      }

      return headers

    
  }
  catch (error) {
    return ''
  }
}
// get 

export function get(end) {

  const headers = getHeaderFunction()
  // console.log(Network.network + end, headers != "" ? {headers} :  '')
  return axios.get(Network.network + end, headers != "" ? {headers} :  '' )
}

// custom-get 

export function customget(end,data) {

  const headers = getHeaderFunction()
  console.log(Network.network+end,data, {headers})
  return axios.get(Network.network+end+data, { headers } )
}


// post

export function post(end, data) {
  const headers = getHeaderFunction()
 console.log(Network.network + end, data, {headers})
  return axios.post(Network.network + end, data, {headers})
}

// put

export function put(end, data) {

  const headers = getHeaderFunction()
  console.log(Network.network + end, data, { headers })
  return axios.put(Network.network + end, data, { headers })
}



export function getMethodById(end, data, header) {
  let options = {
    data: data,
    tail: end[1],
    headers: {
      'Authorization': header
    }

  }
  return axios.post(Network.network + '/' + end[0], options)
}





export function deleteMethod(end, data, header) {
  const url = Network.network + '/' + end[0]

  let options = {
    data: data,
    tail: end[1],
    headers: {
      'Authorization': header
    }
  }
  return axios.delete(url, { data: options });

}



// export function putMethod(end, data, header) {
//   let options = {
//     data: data[0] === undefined ? data : data[0],
//     tail: end[1],
//     id: data[1] === undefined ? 0 : data[1],
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': header
//     }
//   }
//   return axios.put(Network.network + '/' + end[0], options)
// }

export function singlePutMethod(end, data, header) {
  let options = {
    data: data,
    tail: end[1],
    id: 0,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': header
    }
  }
  return axios.put(Network.network + '/' + end[0], options)
}



