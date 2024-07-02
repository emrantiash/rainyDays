import React, { } from 'react';
import styles from './input.style';

const Input = (props) => {
    return (
        <div className="input-group input-group-lg">
            <input 
            placeholder= {props.placeholder}
            disabled = {props.disabled}
            required = {props.required}
            maxLength = {props.length && props.lengthSize}
            style={styles.input}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            id={props.id}
            name = {props.name}
            spellCheck={props.spellcheck}
            className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
            />
        </div>
    )
}

export default Input