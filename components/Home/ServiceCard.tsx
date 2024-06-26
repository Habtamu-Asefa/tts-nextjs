import React from 'react'
import { List, Button } from 'antd'
import Image from 'next/image'
import {useRouter } from 'next/router'

const ServiceCard = (props: any) => {
  const router = useRouter()
  return (
    <div className="flex h-full  font-minionPro flex-col justify-between bg-[#E5EFFF] drop-shadow-lg">
      <div className="w-full px-11 py-9 ">
        <h1 className="text-[#1A3765]  text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-[#1A3765] font-bold font-minionPro ">
          {props.title}
        </h1>
        <p className="text-gray-500  font-minionPro  text-lg md:text-xl xl:text-2xl 2xl:text-3xl  border-gray-500">
          {props.description}
        </p>
        <hr style={{ border: '1px solid lightgray' }} />
        {props.subjects.map((item: any) => (
          <li
            key={item}
            className="text-[#1A3765] font-minionPro text-lg md:text-xl lg:text-2xl 2xl:text-3xl m-5 ml-0"
            style={{
              
              listStyleType: 'none',
              // listStyleImage: "url('/right.png')",
            }}
            
          >
            <Image src="/right.png"  width="30" height="30"/>
          {item}
          </li>
        ))}
      </div>
      <button
      onClick={()=>router.push('/studentRegistration')}
      className="w-full bg-[#1A3765] py-3 text-2xl text-white 2xl:text-3xl">
        Get a Tutor
      </button>
    </div>
  )
}
export default ServiceCard
