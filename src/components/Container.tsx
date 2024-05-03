import React, { ReactNode } from 'react'

function Container({ className, children }: {
    className?: string;
    children: ReactNode
}) {
  return (
    <div className={`${className ? className : 'px-5 md:px-12  '}`}>{children}</div>
  )
}

export default Container