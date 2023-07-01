import React from 'react'
interface Btn {
    label : string
    style : "Green" | "Grey" |"Transparent" 
    onClick? : ()=> void  

}


const Button= ({label , style, onClick} : Btn) => {
  return (
    <>
    <button  className='text-mediumFnt font-midFnt bg-clrLayoutGreen py-4 px-24 rounded-regBtn' >
        {label}
    </button>
    </>
  )
}

export default Button