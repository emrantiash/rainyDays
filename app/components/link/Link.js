import React from 'react';
import styles from './Link.style';

 const Link = (props) => {
  return (
    <div>
        <a href={props.href}
        name={props.name}
        onClick={(e)=>props.click(props.name,props.value)}
        style={styles.pointer}
        
        >{props.text}</a>
    </div>
  )
}

export default Link ;
