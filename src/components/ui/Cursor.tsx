"use client"

import React from 'react'

export default function Cursor() {
    const cursorRef = React.useRef<HTMLDivElement>(null)
    const trailRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        let mx = 0, my = 0
        let tx = 0, ty = 0
        let animationId: number

        const move = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY

            if (cursorRef.current) {
                cursorRef.current.style.left = mx + "px"
                cursorRef.current.style.top = my + "px"
            }
        }

        const animate = () => {
            tx += (mx - tx) * 0.16
            ty += (my - ty) * 0.16

            if (trailRef.current) {
                trailRef.current.style.left = tx + "px"
                trailRef.current.style.top = ty + "px"
            }

            animationId = requestAnimationFrame(animate)
        }

        document.addEventListener("mousemove", move)
        animate()

        return () => {
            document.removeEventListener("mousemove", move)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <React.Fragment>
            <div
                ref={cursorRef}
                className="fixed w-3 h-3 bg-copper rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 9999 }}
            />

            <div
                ref={trailRef}
                className="fixed w-8 h-8 border border-copper rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 9998 }}
            />
        </React.Fragment>
    )
}
