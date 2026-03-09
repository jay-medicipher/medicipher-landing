import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
}

export default function Button({ children, className = '', type, ...props }: ButtonProps) {
    return (
        <button
            type={type ?? 'button'}
            className={`px-6 py-2 font-medium button-text bg-accent rounded-full text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}