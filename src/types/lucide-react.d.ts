declare module 'lucide-react' {
  import * as React from 'react'

  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string
    size?: string | number
    strokeWidth?: string | number
    absoluteStrokeWidth?: boolean
  }

  export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

  export const Home: Icon
  export const User: Icon
  export const FolderGit2: Icon
  export const Mail: Icon
  export const Sparkles: Icon
  export const Menu: Icon
  export const X: Icon
  export const Code2: Icon
  export const Github: Icon
  export const Linkedin: Icon
  export const ArrowUp: Icon
  export const Heart: Icon
  export const ArrowRight: Icon
  export const Terminal: Icon
  export const CheckCircle2: Icon
  export const Copy: Icon
  export const Check: Icon
  export const Layers: Icon
  export const Cpu: Icon
  export const Database: Icon
  export const Server: Icon
  export const Globe: Icon
  export const Zap: Icon
  export const Star: Icon
  export const ExternalLink: Icon
  export const Briefcase: Icon
  export const Award: Icon
  export const GraduationCap: Icon
  export const Download: Icon
  export const Filter: Icon
  export const ArrowUpRight: Icon
  export const MapPin: Icon
  export const Clock: Icon
  export const Send: Icon
  export const MessageSquare: Icon
}
