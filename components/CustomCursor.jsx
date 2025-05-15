"use client";
import React, { useEffect } from 'react';

function CustomCursor() {
    useEffect(() => {
        const circles = Array.from(document.querySelectorAll('.circle'));
        const len = circles.length;
        const positions = Array(len).fill(0).map(() => ({ x: 0, y: 0 }));
        const colors = [
            "#20325b", "#203365", "#22346e", "#253477",
            "#2a3480", "#303489", "#383391", "#413198",
            "#4b2e9f", "#5629a6", "#6123ab", "#6d19b0"
        ];
        let mouseX = 0;
        let mouseY = 0;
        let animating = true;

        // event handler hanya meng-update koordinat pointer
        const handlePointer = e => {
            mouseX = e.clientX ?? e.touches?.[0]?.clientX;
            mouseY = e.clientY ?? e.touches?.[0]?.clientY;
        };

        // loop animasi terpisah menggunakan requestAnimationFrame
        const animate = () => {
            positions.forEach((pos, i) => {
                const targetX = i === 0 ? mouseX : positions[i - 1].x;
                const targetY = i === 0 ? mouseY : positions[i - 1].y;
                pos.x += (targetX - pos.x) * 0.3;
                pos.y += (targetY - pos.y) * 0.3;

                const scale = (len - i) / len;
                const _x = pos.x - 12;
                const _y = pos.y - 12;

                // apply transform dan background color
                circles[i].style.transform =
                    `translate3d(${_x}px, ${_y}px, 0) scale(${scale})`;
                circles[i].style.background = colors[i % colors.length];
            });

            if (animating) requestAnimationFrame(animate);
        };

        // mulai animasi
        requestAnimationFrame(animate);

        window.addEventListener('pointermove', handlePointer, { passive: true });
        window.addEventListener('touchmove',   handlePointer, { passive: true });

        return () => {
            animating = false;
            window.removeEventListener('pointermove', handlePointer);
            window.removeEventListener('touchmove',   handlePointer);
        };
    }, []);

    return (
        <>
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="circle" />
            ))}
            <style jsx>{`
                .circle {
                    position: fixed;
                    pointer-events: none;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    z-index: 1000;
                    will-change: transform;
                    /* no static background, dynamic via JS */
                }
            `}</style>
        </>
    );
}

export default CustomCursor;
