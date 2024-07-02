// import React from 'react';
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

// export default function Loading() {
//     return (
//         <div style={{ padding: 10 }}>

//             <AiOutlineLoading3Quarters size={30} color="Orange" />

//         </div>
//     )
// }

import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from 'next/image';
import loadingImg from '../../assets/img/loading/loading.gif'
// import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading() {
  return (
    <div >
    <Image src={loadingImg} width={100} alt="loading" />
    {/* <AiOutlineLoading3Quarters size = "100" /> */}
  </div>
  )
}

