import { cn } from '@/lib/utils'

type Props = {
  icon: React.ReactNode
  className?: string // Optional className for additional styling
  onClick?: () => void // Optional onClick event handler
}

const SVG: React.FC<Props> = ({ icon, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        className,
        'flex justify-center items-center cursor-pointer',
      )}
      aria-hidden
    >
      {icon}
    </div>
  )
}

export default SVG
