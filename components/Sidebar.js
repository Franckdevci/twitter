import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {BellIcon, BookmarkIcon, BookOpenIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className='hidden sm:flex flex-col p-2 fixed '>

    {/* Logo */}

    <div className="">
        <Image
        src={'/Twitter-logo-png.png'}
        width={50}
        height={50}
        alt='Twitter'
        className='hover:bg-gray-200 rounded-full p-1 xl:items-start h-full'
        >   
        </Image>
    </div>

    {/* Menu */}
    <SidebarMenuItem text="Home" Icon={HomeIcon}/>
    <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
    <SidebarMenuItem text="Notification" Icon={BellIcon}/>
    <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
    <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon}/>
    <SidebarMenuItem text="Bookmark" Icon={BookOpenIcon}/>
    <SidebarMenuItem text="Profil" Icon={UserIcon}/>
    <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>

    {/* Button */}

    <button className='rounded-full bg-blue-500 items-center w-full h-10 hover:brightness-90 text-white'>Tweet</button>

    {/* Mini-profil */}
    <div className="items-center flex  mt-7 justify-center rounded-full  hover:bg-gray-100 py-2 cursor-pointer">
        <Image 
        src={'/profile.jpeg'}
        width={50}
        height={50}
        alt='profile'
        className='bg-cover rounded-full mr-3'
        ></Image>
        <div className="leading-5  hidden xl:inline">
            <h4 className='font-bold'>Jhon DOE</h4>
            <p className='text-gray-500 font-light text-xs'>@JhonDOE</p>
            
        </div>

    </div>


    </div>
  )
}

export default Sidebar