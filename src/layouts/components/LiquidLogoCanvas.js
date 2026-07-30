"use client";
import React, { useRef, useEffect } from "react";

export default function LiquidLogoCanvas({ src, alt, width = 200, height = 48 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    let animId;
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, vx: 0, vy: 0 };

    img.onload = () => {
      canvas.width = width * 2;
      canvas.height = height * 2;

      const render = () => {
        // Interpolate mouse movement
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image with subtle liquid displacement slice effect
        const slices = 12;
        const sliceHeight = canvas.height / slices;

        for (let i = 0; i < slices; i++) {
          const sy = i * sliceHeight;
          const distToMouseY = Math.abs(sy - mouse.y);
          const influence = Math.max(0, 1 - distToMouseY / 60);

          const offsetX = Math.sin(Date.now() * 0.003 + i * 0.5) * influence * 6;
          const offsetY = Math.cos(Date.now() * 0.003 + i * 0.5) * influence * 3;

          ctx.drawImage(
            img,
            0,
            (i * img.height) / slices,
            img.width,
            img.height / slices,
            offsetX,
            sy + offsetY,
            canvas.width,
            sliceHeight
          );
        }

        animId = requestAnimationFrame(render);
      };

      render();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) * 2;
      mouse.targetY = (e.clientY - rect.top) * 2;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [src, width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="cursor-pointer transition-transform hover:scale-105"
      aria-label={alt}
    />
  );
}
