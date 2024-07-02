import React from 'react'
import styles from './Node.style';
import { BsBullseye } from "react-icons/bs";
import commonStyle from '../styles';

const Node = (props) => {
    return (
        <div style={{
            //  backgroundColor : 'red',
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'flex-start',
            alignItems : 'flex-end',
            // width : '50%'
        }}>
          <span style={{
            marginRight : 10,
            width :  '10%'
          }}>
            {props.date}
            </span>  


            <div style={{
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'center',
                alignItems : 'center',
                position : 'relative',
                marginRight : 10,
                marginLeft : 10,
                width :  '10%'
            }}>
                {
                    props.flag &&
                    <div className=""  style={{
                        height : 70,
                        width : 5,
                        backgroundColor : '#FFE9C0'
                    }}>
                        </div>
                }
            
                
            
            <BsBullseye color="#b7b741" />
            </div>
            <span style={{
                 width :  '50%',
            marginLeft : 10,
            color:commonStyle.color.secondary
          }}> {props.text}
          </span>
        </div>


    )
}

export default Node
