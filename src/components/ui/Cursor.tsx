"use client"

import { useEffect, useRef } from "react"

export default function Cursor() {
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const initialized = useRef(false)

    useEffect(() => {
        let mx = 0
        let my = 0
        let ox = 0
        let oy = 0
        let animationId: number

        const handleMouseMove = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY

            // show cursor on first move
            if (!initialized.current) {
                initialized.current = true

                if (outerRef.current && innerRef.current) {
                    outerRef.current.style.opacity = "1"
                    innerRef.current.style.opacity = "1"
                }

                ox = mx
                oy = my
            }

            if (innerRef.current) {
                innerRef.current.style.left = mx + "px"
                innerRef.current.style.top = my + "px"
            }
        }

        const animate = () => {
            ox += (mx - ox) * 0.1
            oy += (my - oy) * 0.1

            if (outerRef.current) {
                outerRef.current.style.left = ox + "px"
                outerRef.current.style.top = oy + "px"
            }

            animationId = requestAnimationFrame(animate)
        }

        document.addEventListener("mousemove", handleMouseMove)
        animate()

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <>
            <div ref={outerRef} className="cursor-outer" />
            <div ref={innerRef} className="cursor-inner" />
        </>
    )
}
