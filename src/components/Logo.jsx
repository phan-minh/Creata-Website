// Brand wordmark: gradient "C" arc mark + Creata name.
// Swap the <svg> mark for the official logo asset when provided.
export default function Logo({ compact = false }) {
  return (
    <a href="#top" className="logo" aria-label="Creata Communications — home">
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9d5cff" />
            <stop offset="0.55" stopColor="#c026d3" />
            <stop offset="1" stopColor="#e11d8f" />
          </linearGradient>
        </defs>
        <path
          d="M46 20a17 17 0 1 0 0 24"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
      {!compact && (
        <span className="logo-word">
          Creata<span className="logo-sub">Communications</span>
        </span>
      )}
    </a>
  )
}
