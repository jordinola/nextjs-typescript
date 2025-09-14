import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='text-3xl'>
        <h1>DASHBOARD</h1>
        {children}
    </div>
  )
}

export default Layout