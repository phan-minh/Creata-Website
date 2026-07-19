// Lightweight inline SVG icon set for industries & UI.
// Stroke-based, inherits currentColor.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IndustryIcon = ({ name, ...props }) => {
  const paths = {
    retail: (
      <>
        <path d="M4 8h16l-1 12H5L4 8z" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </>
    ),
    ecommerce: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 8H6" />
      </>
    ),
    tech: (
      <>
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
    logistics: (
      <>
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
      </>
    ),
    finance: (
      <>
        <path d="M4 20V10M9 20V6M14 20v-8M19 20V4" />
      </>
    ),
    health: (
      <>
        <path d="M3 12h4l2-5 3 10 2-6 2 3h4" />
      </>
    ),
    food: (
      <>
        <path d="M6 3v7a2 2 0 0 0 4 0V3M8 3v18" />
        <path d="M16 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4 2.5-1 2.5-4-1-5-2.5-5zM16 12v9" />
      </>
    ),
    industry: (
      <>
        <path d="M3 21V10l6 4V10l6 4V6l3 2v13z" />
        <path d="M3 21h18" />
      </>
    ),
  }
  return (
    <svg {...base} {...props} aria-hidden="true">
      {paths[name] || paths.tech}
    </svg>
  )
}

export const ArrowIcon = (props) => (
  <svg {...base} width="18" height="18" {...props} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const MapPinIcon = (props) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const MailIcon = (props) => (
  <svg {...base} {...props} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const PhoneIcon = (props) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1z" />
  </svg>
)
