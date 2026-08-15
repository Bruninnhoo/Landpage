import React from 'react'

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

// React Icon
export const ReactLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#00d8ff" />
  </svg>
)

// Next.js Icon
export const NextjsLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#0f172a" />
    <path d="M15.5 16.5L10 9V16.5H8.5V7.5H10.2L15.7 15.1V7.5H17V16.5H15.5Z" fill="#ffffff" />
  </svg>
)

// TypeScript Icon
export const TypescriptLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="4" fill="#3178C6" />
    <path d="M11.5 16.5V11H13.5V16.5H11.5ZM9 11.75V11H14V11.75H9ZM14.8 16.6C14.1 16.6 13.5 16.4 13.1 16L13.6 14.8C14 15.1 14.4 15.3 14.9 15.3C15.3 15.3 15.5 15.2 15.5 14.9C15.5 14.4 13.9 14.6 13.9 13.1C13.9 12.2 14.6 11.6 15.7 11.6C16.3 11.6 16.9 11.8 17.3 12.1L16.8 13.2C16.4 12.9 16 12.8 15.6 12.8C15.2 12.8 15 12.9 15 13.1C15 13.6 16.6 13.4 16.6 14.9C16.6 15.9 15.8 16.6 14.8 16.6Z" fill="white" />
  </svg>
)

// Node.js Icon
export const NodejsLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#5FA04E" />
    <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="#1e293b" />
    <path d="M12 7.5L16 9.8V14.2L12 16.5L8 14.2V9.8L12 7.5Z" fill="#5FA04E" />
  </svg>
)

// Python Icon
export const PythonLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.9 2C8.6 2 8.7 3.4 8.7 3.4V5.1H12.1V5.6H6.9C5.2 5.6 3.8 6.6 3.8 8.8C3.8 11.1 4.9 11.9 6.6 11.9H7.9V10.4C7.9 8.6 9.3 7.3 11.1 7.3H14.5V6.7C14.5 4.9 13.6 2 11.9 2ZM10.4 3.7C10.8 3.7 11.1 4 11.1 4.4C11.1 4.8 10.8 5.1 10.4 5.1C10 5.1 9.7 4.8 9.7 4.4C9.7 4 10 3.7 10.4 3.7Z" fill="#3776AB" />
    <path d="M12.1 22C15.4 22 15.3 20.6 15.3 20.6V18.9H11.9V18.4H17.1C18.8 18.4 20.2 17.4 20.2 15.2C20.2 12.9 19.1 12.1 17.4 12.1H16.1V13.6C16.1 15.4 14.7 16.7 12.9 16.7H9.5V17.3C9.5 19.1 10.4 22 12.1 22ZM13.6 20.3C13.2 20.3 12.9 20 12.9 19.6C12.9 19.2 13.2 18.9 13.6 18.9C14 18.9 14.3 19.2 14.3 19.6C14.3 20 14 20.3 13.6 20.3Z" fill="#FFD43B" />
  </svg>
)

// Django Icon
export const DjangoLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="4" fill="#092E20" />
    <path d="M11 6h2v9.5c0 1.5-.7 2.5-2.2 2.5-.8 0-1.5-.3-1.9-.7l.6-1.3c.3.3.7.5 1.1.5.7 0 1-.4 1-1.3V6zm-4.5 4.7c.6 0 1 .2 1.3.5V6H6.2V4.5h3.3v11.7H8V15c-.4.5-1 .8-1.7.8-1.5 0-2.6-1.2-2.6-2.6 0-1.5 1.2-2.5 2.8-2.5zm.3 3.8c.8 0 1.3-.6 1.3-1.3s-.5-1.3-1.3-1.3-1.3.6-1.3 1.3.5 1.3 1.3 1.3z" fill="#44B78B" />
  </svg>
)

// PostgreSQL Icon
export const PostgresLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.2 4 16.1 5 17.3 6.6C16.5 7.4 15.2 7.8 14 7.8C12.5 7.8 11.2 7.1 10.3 6.1C9.6 7 8.3 7.8 6.8 7.8C5.7 7.8 4.6 7.4 3.8 6.7C5 5.1 6.9 4 12 4ZM12 20C7.58 20 4 16.42 4 12C4 11.1 4.15 10.23 4.43 9.42C5.17 9.8 6.03 10 7 10C8.9 10 10.6 9 11.6 7.5C12.6 9 14.3 10 16.2 10C17.1 10 17.9 9.8 18.6 9.45C18.86 10.25 19 11.11 19 12C19 16.42 15.42 20 12 20Z" fill="#336791" />
  </svg>
)

// Docker Icon
export const DockerLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.9 11.7H16.2V13.8H13.9V11.7ZM11.1 11.7H13.4V13.8H11.1V11.7ZM8.3 11.7H10.6V13.8H8.3V11.7ZM5.5 11.7H7.8V13.8H5.5V11.7ZM11.1 9.2H13.4V11.3H11.1V9.2ZM8.3 9.2H10.6V11.3H8.3V9.2ZM5.5 9.2H7.8V11.3H5.5V9.2ZM8.3 6.7H10.6V8.8H8.3V6.7ZM2.7 11.7H5V13.8H2.7V11.7ZM22.5 13.5C21.8 13.1 20.6 13.1 19.8 13.6C19.3 13.2 18.6 13 17.8 13H2V15.2C2 17.6 3.9 19.5 6.3 19.5H16.7C19.7 19.5 22.2 17 22.2 14C22.2 13.8 22.5 13.5 22.5 13.5Z" fill="#2496ED" />
  </svg>
)

// Tailwind CSS Icon
export const TailwindLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 6C9.3 6 7.7 7.3 7.2 10C8.1 8.7 9.2 8.2 10.5 8.6C11.3 8.9 11.8 9.5 12.4 10.1C13.4 11.1 14.6 12.3 17.5 12.3C20.2 12.3 21.8 11 22.3 8.3C21.4 9.6 20.3 10.1 19 9.7C18.2 9.4 17.7 8.8 17.1 8.2C16.1 7.2 14.9 6 12 6ZM6.7 12.3C4 12.3 2.4 13.6 1.9 16.3C2.8 15 3.9 14.5 5.2 14.9C6 15.2 6.5 15.8 7.1 16.4C8.1 17.4 9.3 18.6 12.2 18.6C14.9 18.6 16.5 17.3 17 14.6C16.1 15.9 15 16.4 13.7 16C12.9 15.7 12.4 15.1 11.8 14.5C10.8 13.5 9.6 12.3 6.7 12.3Z" fill="#06B6D4" />
  </svg>
)

// Supabase Icon
export const SupabaseLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.4 2.3L3.8 13.7C3.4 14.2 3.7 15 4.4 15H11.5L10.6 21.7C10.4 22.3 11.2 22.7 11.6 22.1L21.2 10.7C21.6 10.2 21.3 9.4 20.6 9.4H13.5L14.4 2.7C14.6 2.1 13.8 1.7 13.4 2.3Z" fill="#3ECF8E" />
  </svg>
)

// Redis Icon
export const RedisLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 9.5L12 5L3 9.5L12 14L21 9.5ZM12 16L3.5 11.8V15.5L12 20L20.5 15.5V11.8L12 16Z" fill="#DC382D" />
  </svg>
)

// AWS Icon
export const AWSLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.5 10.5C6.5 9.5 7.2 9 8.2 9C9.1 9 9.8 9.5 9.8 10.5V14H11.3V10.3C11.3 8.4 9.9 7.5 8.2 7.5C6.4 7.5 5 8.5 5 10.5H6.5ZM12.5 7.7L14.2 14H15.8L17.5 7.7H16.1L15 12.3L13.9 7.7H12.5ZM20 11.5C19.2 11.5 18.6 11.9 18.6 12.5C18.6 13.1 19.2 13.4 20 13.5C21.1 13.7 21.8 14.1 21.8 15.2C21.8 16.3 20.8 17 19.5 17C18.1 17 17 16.1 17 14.8H18.4C18.4 15.4 18.9 15.8 19.5 15.8C20.1 15.8 20.4 15.6 20.4 15.2C20.4 14.8 20 14.6 19.2 14.4C18.1 14.2 17.2 13.8 17.2 12.6C17.2 11.5 18.2 10.5 19.6 10.5C20.8 10.5 21.8 11.3 21.8 12.5H20.4C20.4 11.9 20.1 11.5 20 11.5Z" fill="#FF9900" />
    <path d="M4 17.5C9 20 15 20 20 17" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// MongoDB Icon
export const MongoLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C11.6 2 11.2 2.3 11.1 2.7C9.5 8 5 10.5 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 10.5 14.5 8 12.9 2.7C12.8 2.3 12.4 2 12 2ZM12 4.5C13.2 8.3 17 10.5 17 15C17 17.8 14.8 20 12 20C9.2 20 7 17.8 7 15C7 10.5 10.8 8.3 12 4.5Z" fill="#47A248" />
  </svg>
)

// GraphQL Icon
export const GraphQLLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="#E10098" strokeWidth="1.5" />
    <circle cx="12" cy="2" r="2" fill="#E10098" />
    <circle cx="3.5" cy="7" r="2" fill="#E10098" />
    <circle cx="20.5" cy="7" r="2" fill="#E10098" />
    <circle cx="3.5" cy="17" r="2" fill="#E10098" />
    <circle cx="20.5" cy="17" r="2" fill="#E10098" />
    <circle cx="12" cy="22" r="2" fill="#E10098" />
  </svg>
)

// Vite Icon
export const ViteLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21.5 4.5L12.5 21.5L2.5 4.5L8.5 3.5L12 9.5L15.5 3.5L21.5 4.5Z" fill="#646CFF" />
    <path d="M15.5 3.5L12 9.5L8.5 3.5L12 2L15.5 3.5Z" fill="#FFC437" />
  </svg>
)

// Git Icon
export const GitLogo = ({ size = 24, ...props }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21.7 11.3L12.7 2.3C12.3 1.9 11.7 1.9 11.3 2.3L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L11.3 21.7C11.7 22.1 12.3 22.1 12.7 21.7L21.7 12.7C22.1 12.3 22.1 11.7 21.7 11.3ZM12 16.5C10.6 16.5 9.5 15.4 9.5 14C9.5 13.3 9.8 12.7 10.3 12.2V9.3C9.8 8.8 9.5 8.2 9.5 7.5C9.5 6.1 10.6 5 12 5C13.4 5 14.5 6.1 14.5 7.5C14.5 8.2 14.2 8.8 13.7 9.3V14.7C14.2 15.2 14.5 15.8 14.5 16.5C14.5 16.5 12 16.5 12 16.5Z" fill="#F05032" />
  </svg>
)
