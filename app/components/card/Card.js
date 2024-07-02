import React from 'react'

export default function Card(props) {
  return (
    <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div >
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                       
                        {props.text}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {/* $40,000 */}
                        {props.number}
                      </div>
                    </div>
                    <div className="col-auto">
                      {props.image}
                    </div>
                  </div>
                </div>
              </div>
  )
}
