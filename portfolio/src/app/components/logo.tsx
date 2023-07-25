'use client'
import Lottie from "lottie-react"
import React, { useState } from 'react'
import avatar from '../../../public/avatars/avatar.png'


export default ()=> {
    return(
    <div>
          <Lottie className="" animationData={avatar} autoplay={true} loop={false}/>
    </div>
    )
}