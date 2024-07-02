import React from 'react'

export default function Select(props) {
  return (
    <select className="form-select" aria-label="Default select example" defaultValue=""
    id={props.id}
    name = {props.name}
    onChange={props.onChange}
    >
     <option className="form-select">{props.selected !="" ? props.selected : "Select an option"}</option>
     {/* <option className="form-select">{props.bank && "Bank Account"}</option> */}
    {
        props.data && 
        props.data.map((data,index)=>
        <option value={[data.id,data.name,data.amount]} key={index}>{data.name}</option>
        )
    }
  </select>
  )
}
