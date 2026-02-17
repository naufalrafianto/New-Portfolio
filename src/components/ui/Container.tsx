import { cn } from "@/lib/cn"
import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
    className?: string
    size?: "sm" | "md" | "lg" | "xl" | "full"
}

export default function Container({
    children,
    className,
    size = "lg",
}: ContainerProps) {
    const sizes = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-screen-xl",
        full: "max-w-full",
    }

    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                sizes[size],
                className
            )}
        >
            {children}
        </div>
    )
}
