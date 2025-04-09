const gradients = {
    emerald: "bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]",
    blue: "bg-[conic-gradient(from_90deg_at_50%_50%,#51A7E8_0%,#1A4E8C_50%,#51A7E8_100%)]",
    purple: "bg-[conic-gradient(from_90deg_at_50%_50%,#C084FC_0%,#6B21A8_50%,#C084FC_100%)]",
    neon: "bg-[conic-gradient(from_0deg,#FF00FF,#00FFFF,#00FF00,#FFFF00,#FF0000,#FF00FF)]",
    sonar: "bg-[conic-gradient(from_0deg,transparent_0deg,transparent_130deg,rgba(80,255,80,0.8)_150deg,transparent_170deg,transparent_360deg)]",
    radar: "bg-[conic-gradient(from_0deg,rgba(0,255,0,0.3)_0deg,transparent_30deg,rgba(0,255,0,0.3)_60deg,transparent_90deg,rgba(0,255,0,0.3)_120deg,transparent_150deg,rgba(0,255,0,0.3)_180deg,transparent_210deg,rgba(0,255,0,0.3)_240deg,transparent_270deg,rgba(0,255,0,0.3)_300deg,transparent_330deg,rgba(0,255,0,0.3)_360deg)]",
    stripes: "bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51E4B8_10%,transparent_20%,#21554E_30%,transparent_40%,#51E4B8_50%)]",
  };
  
  const AnimatedBorder = ({
    children,
    variant = "emerald",
    className = "",
    animationSpeed = "2s",
    rounded = "rounded-full",
    borderColor = "border-zinc-400",
    backgroundColor = "bg-bgColor",
    width = "w-full",
    padding = "",
    paddingEffect = "p-[1px]"
  }) => {
    const gradientClass = gradients[variant] || gradients.emerald;
  
    return (
      <span className={`relative inline-flex overflow-hidden ${paddingEffect} ${width} ${rounded} ${className}`}>
        <span
          className={`absolute inset-[-1000%] animate-spin ${gradientClass}`}
          style={{ animationDuration: animationSpeed }}
        />
        <div className={`relative z-10 flex items-center justify-center gap-2 border w-full ${padding} ${rounded} ${borderColor} ${backgroundColor}`}>
          {children}
        </div>
      </span>
    );
  };
  
  export default AnimatedBorder;