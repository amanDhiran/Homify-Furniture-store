"use client"
import React, { ReactNode } from 'react'

export function Container({ className, children }: {
    className?: string;
    children: ReactNode
}) {
  return (
    <div className={` w-full m-auto ${className ? className : 'px-5 md:px-16'}`}>{children}</div>
  )
}

