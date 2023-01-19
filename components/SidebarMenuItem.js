import React from 'react'

const SidebarMenuItem = ({text, Icon}) => {
  return (
    <div className='group flex cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-200'>
        <Icon className="h-7"/> 
        <span className='{`${active && "font-bold"}`} hidden xl:inline'>{text}</span>
    </div>
  )
}

export default SidebarMenuItem