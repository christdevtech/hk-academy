'use client'
import React from 'react'
import classes from './index.module.scss'
import Logo from '../../Logo'
import type { Header, Settings, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname, useRouter } from 'next/navigation'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'

const HeaderComponent = ({ header, settings }: { header: Header; settings: Settings }) => {
  const pathname = usePathname()
  const { user } = useAuth() // User from Auth context

  // const isLoggedIn = !!contextUser || !!initialUser

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className={['py-4', noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          // "data-[active=true]:after:content-['']",
          // 'data-[active=true]:after:absolute',
          // 'data-[active=true]:after:bottom-0',
          // 'data-[active=true]:after:left-0',
          // 'data-[active=true]:after:right-0',
          // 'data-[active=true]:after:h-[2px]',
          // 'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
      maxWidth="2xl"
    >
      <NavbarBrand>
        <Link href="/">
          <Logo {...settings} />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="hidden sm:flex">
        {header?.navItems.map((item, index) => {
          const href =
            item.link.type === 'reference' &&
            typeof item.link.reference?.value === 'object' &&
            item.link.reference.value.slug
              ? `${
                  item.link.reference?.relationTo !== 'pages'
                    ? `/${item.link.reference?.relationTo}`
                    : ''
                }/${item.link.reference.value.slug}`
              : item.link.url
          return (
            <NavbarItem key={index} className="py-1" isActive={pathname.includes(href)}>
              <Link href={href} color={pathname.includes(href) ? 'primary' : 'foreground'}>
                {item.link.label}
              </Link>
            </NavbarItem>
          )
        })}

        {!user && (
          <React.Fragment>
            <NavbarItem>
              <Button href="/login" as={Link} variant="ghost" color="danger">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem key="2">
              <Button as={Link} href="/create-account" variant="shadow" color="danger">
                Join Now
              </Button>
            </NavbarItem>
          </React.Fragment>
        )}
        {user && (
          <Dropdown>
            <DropdownTrigger>
              <Button variant="ghost">User Account</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Account">
              <DropdownItem key="3" href="/account">
                User DashBoard
              </DropdownItem>
              <DropdownItem key="logout" href="/logout" className="text-danger" color="danger">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu className="py-5 my-5 font-bold">
        <NavbarMenuItem>
          <Link
            href="/"
            color={pathname === '/' ? 'primary' : 'foreground'}
            className="text-xl  py-2"
          >
            Home
          </Link>
        </NavbarMenuItem>
        {header?.navItems.map((item, index) => {
          const href =
            item.link.type === 'reference' &&
            typeof item.link.reference?.value === 'object' &&
            item.link.reference.value.slug
              ? `${
                  item.link.reference?.relationTo !== 'pages'
                    ? `/${item.link.reference?.relationTo}`
                    : ''
                }/${item.link.reference.value.slug}`
              : item.link.url
          return (
            <NavbarMenuItem key={index} className="py-1">
              <Link
                href={href}
                color={pathname.includes(href) ? 'primary' : 'foreground'}
                className="text-xl  py-2"
              >
                {item.link.label}
              </Link>
            </NavbarMenuItem>
          )
        })}
        {!user ? (
          <React.Fragment>
            <NavbarMenuItem>
              <Link href="/login" color="foreground" className="text-xl  py-2">
                Login
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem key="2">
              <Link href="/create-account" color="foreground" className="text-xl  py-2">
                Join Now
              </Link>
            </NavbarMenuItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavbarMenuItem>
              <Link href="/account" color="foreground" className="text-xl ">
                User Dashboard
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button
                href="/logout"
                color="danger"
                className="text-xl "
                as={Link}
                variant={'solid'}
              >
                Sign Out
              </Button>
            </NavbarMenuItem>
          </React.Fragment>
        )}
      </NavbarMenu>
    </Navbar>
  )
}

export default HeaderComponent
