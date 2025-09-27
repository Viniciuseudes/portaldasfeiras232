export function SectionDivider() {
  return (
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden"
      style={{ lineHeight: 0 }}
    >
      <svg
        className="relative block w-full h-[100px] lg:h-[150px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "oklch(var(--primary))", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "oklch(var(--accent))", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="url(#wave-gradient)"
        ></path>
      </svg>
    </div>
  );
}
