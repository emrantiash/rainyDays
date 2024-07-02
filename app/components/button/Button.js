
import React from 'react';
import commonStyle from '../styles';

const Button = (props) => {
  return (
    // <Button
    //           title={props.text}
    //           loading={false}
    //           loadingProps={{ size: 'small', color: 'white' }}
    //           buttonStyle={{
    //             backgroundColor: 'rgba(111, 202, 186, 1)',
    //             borderRadius: 5,
    //           }}
    //           titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
    //           containerStyle={{
    //             marginHorizontal: 50,
    //             height: 50,
    //             width: 200,
    //             marginVertical: 10,
    //           }}
    //           onPress={props.onclick}
    //         />
    <div 
    // className="d-grid gap-2 d-md-flex " 
    >
     
      <button
        // type={props.type}
        type = "button"
        className={props.identity ? props.className : "main-btn btn-hover wow fadeInUp"}
        onClick={ props.onclick}
        // disabled = {props.disabled}
       
        style={{
          width: props.width,
          fontSize: '80%',
          letterSpacing: 0.5,
          background : props.background
        }}>

        {props.text}
      </button>
      
    </div>
  )
}

export default Button;
