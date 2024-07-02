import React from 'react';
import PropTypes from 'prop-types';


const  Toast = (props) => {
  return (
    <div id="toast-simple" 
    style={{
      letterSpacing : 0.5
    }}
    className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
   
    <div className="pl-4 text-sm font-normal">{props.text}</div>
</div>
 
  )
}

Toast.propTypes = {
  text : PropTypes.string
}
export default Toast ;
