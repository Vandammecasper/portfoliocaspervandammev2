'use client'

import { useState } from "react"


export default  (title:any, years:any) => {
    const [isHovering, setIsHovering] = useState(true)

  const handleHover = () => {
    setIsHovering(!isHovering)
  }
    return(
        <div className="relative flex flex-wrap">
            {isHovering ? 
            <div onMouseEnter={handleHover} className="px-5 py-2.5 border-4 border-solid border-sky-500 rounded-3xl h-14 text-white items-center mx-2 text-2xl mt-4">
                {title}
            </div> : 
            <div onMouseLeave={(handleHover)} className="px-5 py-2.5 border-4 border-solid border-sky-500 rounded-3xl h-14 text-white items-center mx-2 text-2xl mt-4">
                {years}
            </div> 
            }
        </div>
    )
}