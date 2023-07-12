'use client'

import React from 'react'
import Container from '../Container'
import  {BsHouseAddFill} from "react-icons/bs"
import  {GiWindmill} from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import CategoryBox from './CategoryBox'


export const categories = [
    {
        label: "Hall",
        icon: BsHouseAddFill,
        description: "Event halls close to you"
    }
    ,
    {
        label: "Weddings",
        icon: GiWindmill,
        description: "Event halls for weddings"
    },

      {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "Event halls for weddings"
    },

]

const Categories = () => {
  return (
    <Container>
        <div 
         className='pt-4
         flex
         flex-row
         items-center
         justify-between
         overflow-x-auto
         '
        >
          {
            categories.map((item) =>(
                <CategoryBox
                 key={item.label}
                 label={item.label}
                 description={item.description}
                 icon={item.icon}
                />
            ))
          }
        </div>
    </Container>
  )
}

export default Categories