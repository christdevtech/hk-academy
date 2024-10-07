'use client'
import { Link, Button } from '@nextui-org/react'
import { Gutter } from '../_components/Gutter'

export default function NotFound() {
  return (
    <Gutter>
      <div className="container m-auto min-h-[60dvh] flex flex-col justify-center text-center">
        <div className="max-h-[200px] flex justify-center align-center">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fill="#a1a1a1"
                fill-rule="evenodd"
                d="M5.781 4.414a7 7 0 019.62 10.039l-9.62-10.04zm-1.408 1.42a7 7 0 009.549 9.964L4.373 5.836zM10 1a9 9 0 100 18 9 9 0 000-18z"
              ></path>{' '}
            </g>
          </svg>
        </div>
        <h1 className="text-3xl md:text-6xl font-bold py-8">
          404 <br />
          Page Not Found
        </h1>
        <p>The page you requested is not on this server. Check the URL and try again.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 row-start-4">
          <div></div>
          <Button variant={'ghost'} as={Link} href="/" className="md:mx-5 mx-8 my-4">
            Home Page
          </Button>
          <div></div>
        </div>
      </div>
    </Gutter>
  )
}
