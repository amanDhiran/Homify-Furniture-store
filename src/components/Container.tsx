import React, { ReactNode } from 'react'

function Container({ className, children }: {
    className?: string;
    children: ReactNode
}) {
  return (
    <div className={`px-5 md:px-16 w-full m-auto ${className}`}>{children}</div>
  )
}

export default Container