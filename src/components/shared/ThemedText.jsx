import React from "react";
import "./ThemedText.css";

export default function ThemedText({
  children,
  variant = "default",
  className = "",
  color,
  size,
  weight,
  align,
  style,
  ...props
}) {
  return (
    <span
      className={`themed-text themed-text--${variant} ${className}`}
      style={{
        color,
        fontSize: size,
        fontWeight: weight,
        textAlign: align,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}