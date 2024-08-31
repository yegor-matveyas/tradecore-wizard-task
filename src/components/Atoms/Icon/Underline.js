export default function Underline({ className = '', style = {} }) {
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
      <rect x="8" y="30" width="20" height="2" fill="currentColor" />
      <rect x="16" y="6.36808" width="4" height="23" transform="rotate(-20 16 6.36808)" fill="currentColor" />
      <rect x="15.8665" y="5" width="4" height="23" transform="rotate(20 15.8665 5)" fill="currentColor" />
      <rect x="16" y="5" width="4" height="2" fill="currentColor" />
      <rect x="13" y="20" width="10" height="3" fill="currentColor" />
    </svg>
  )
}
