"use client"
import React, {useEffect, useState} from 'react';


export default function HeroSection() {



  return (
    <div className={`relative flex flex-col items-center min-h-[calc(100vh-80px)] w-full justify-center bg-cover bg-center`}>
    <div className='flex flex-col items-center z-10'>
    <h1 className='text-8xl font-bebas' >Halo Theme</h1>
    <div className='flex flex-col gap-2 text-center'>
      <h2 className='text-3xl text-indigo-500'>Get my content on these platforms!</h2>
      <div className='flex flex-col gap-2'>
        <a className='border-2 border-black p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>YouTube</a>
        <a className='border-2 border-black p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Twitch</a>
        <a className='border-2 border-black p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Instagram</a>
        <a className='border-2 border-black p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Facebook</a>
        <a className='border-2 border-black p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Twitter</a>
      </div>
    </div>
    </div>
  </div>
    )
  }