export default function Attach({ className = '', style = {} }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect width="36" height="36" fill="none" />
      <rect x="10" y="4" width="4" height="20" fill="currentColor" />
      <rect x="22" y="12" width="4" height="20" fill="currentColor" />
      <rect x="10" y="16" width="4" height="16" transform="rotate(-90 10 16)" fill="currentColor" />
      <rect x="10" y="8" width="4" height="16" transform="rotate(-90 10 8)" fill="currentColor" />
      <rect x="10" y="24" width="4" height="16" transform="rotate(-90 10 24)" fill="currentColor" />
      <rect x="10" y="32" width="4" height="16" transform="rotate(-90 10 32)" fill="currentColor" />
      <rect x="22" y="6" width="4" height="4" fill="currentColor" />
      <rect x="10" y="26" width="4" height="4" fill="currentColor" />
    </svg>
  )
}
