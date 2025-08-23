// components/PlaceholderImage.jsx
export default function PlaceholderImage({ text = "Preview no disponible", className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 600 400" 
      fill="#f3f4f6" 
      className={className}
    >
      <rect width="600" height="400" fill="#f3f4f6" />
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontFamily="system-ui, sans-serif" 
        fontSize="18" 
        fill="#9ca3af"
      >
        {text}
      </text>
    </svg>
  );
}