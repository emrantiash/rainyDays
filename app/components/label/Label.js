
import React  from 'react';
import styles from './Label.style';


// block text-lg font-medium text-gray-700 antialiased tracking-widest
const Label = (props) =>{
    return(
        <label className={props.className ? props.className : 'badge bg-primary text-wrap'}>
            {props.image} {props.title} 
            {
                props.required &&
                <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
               <div style={{color:'white'}}> *</div>
                </span>
            }
            
        </label>
       
    )
}

export default Label



