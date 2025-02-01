import React from 'react'
// import Sidebar from '@/page-components/sidebar'
import InfoBar from '@/page-components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      {/* <Sidebar /> */}
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout