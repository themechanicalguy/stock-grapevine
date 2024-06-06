import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Avatar } from '@nextui-org/react'
import { auth } from '@/auth';
import React from 'react';


export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = <Avatar src={session.user?.image || ''} />
  } else {
    authContent = <>
      <NavbarItem>
        <Button type='submit' color='secondary' variant='bordered'>Sign In</Button>
      </NavbarItem>
      <NavbarItem>
        <Button type='submit' color='primary' variant='flat'>
          Sign up
        </Button>
      </NavbarItem>
    </>
  }

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>GrapeVine</Link>
      </NavbarBrand>
      <NavbarContent justify='center'></NavbarContent>
      <NavbarItem>
        <Input />
      </NavbarItem>

      <NavbarContent justify='end'>
        <NavbarItem>
          {/* {authContent} */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent></NavbarContent>
    </Navbar>
  )
}