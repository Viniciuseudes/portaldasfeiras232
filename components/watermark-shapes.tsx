export function WatermarkShapes() {
  return (
    <div
      className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Top-left area shapes */}
      <div className="absolute w-32 h-32 top-8 left-8 border-r-2 border-b-2 border-secondary/20 rounded-br-[100%]" />
      <div className="absolute w-24 h-24 top-20 left-20 border-l-2 border-t-2 border-primary/20 rounded-tl-[100%]" />

      {/* Top-right area shapes */}
      <div className="absolute w-40 h-40 top-0 right-0 border-l-2 border-b-2 border-accent/20 rounded-bl-[100%]" />
      <div className="absolute w-28 h-28 top-12 right-12 border-r-2 border-t-2 border-muted/50 rounded-tr-[100%]" />

      {/* Bottom-left area shapes */}
      <div className="absolute w-36 h-36 bottom-0 left-0 border-r-2 border-t-2 border-muted/50 rounded-tr-[100%]" />
      <div className="absolute w-20 h-20 bottom-10 left-10 border-l-2 border-b-2 border-accent/20 rounded-bl-[100%]" />

      {/* Bottom-right area shapes */}
      <div className="absolute w-44 h-44 bottom-8 right-8 border-l-2 border-t-2 border-primary/20 rounded-tl-[100%]" />
      <div className="absolute w-32 h-32 bottom-20 right-20 border-r-2 border-b-2 border-secondary/20 rounded-br-[100%]" />
    </div>
  );
}
