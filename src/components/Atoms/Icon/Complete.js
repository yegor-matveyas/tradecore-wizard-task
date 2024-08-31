export default function Complete({ className = '', style = {} }) {
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
      <rect x="7" y="15.8284" width="4" height="12" transform="rotate(-45 7 15.8284)" fill="currentColor" />
      <rect x="26.7279" y="10" width="4" height="18" transform="rotate(45 26.7279 10)" fill="currentColor" />
    </svg>
  )
}
