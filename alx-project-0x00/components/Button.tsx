import React from 'react'
import { ButtonProps } from '@/interfaces'
function Button({ title, className, onclick }: ButtonProps) {
    return (
        <button className={`px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}>{title}</button>
    )
}

export default Button
