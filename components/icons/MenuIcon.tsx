import cn from '@/utils/cn'
import React from 'react'

const MenuIcon = ({ className = '', isNavbarOpen }: { className?: string, isNavbarOpen: boolean }) => {
    return (
        <svg className={className} width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect rx={ isNavbarOpen ? "1" : "0"} className={cn("transition-all", { 'rotate-45 translate-x-1 -translate-y-[2px]': isNavbarOpen })} width="24" height="2" fill="#D9D9D9" />
            <rect rx={ isNavbarOpen ? "1" : "0"} className={cn("transition-all", { '-rotate-45 translate-y-4 -translate-x-2': isNavbarOpen })} x="9" y="7" width={isNavbarOpen ? "24" : "15"} height="2" fill="#D9D9D9" />
        </svg>
    )
}

export default MenuIcon
