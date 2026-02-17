"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaTrophy, FaUser } from "react-icons/fa"

export default function Sidebar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const items = [
        { label: "About", icon: FaUser },
        { label: "Skills", icon: FaCode },
        { label: "Work", icon: FaBriefcase },
        { label: "Exp", icon: FaTrophy },
        { label: "Contact", icon: FaEnvelope }
    ]

    return (
        <aside className="fixed top-0 left-0 z-50 flex bg-charcoal w-20 min-h-screen items-stretch justify-center border-r border-ink2">
            <div className="flex flex-col justify-between items-center py-8 px-3 w-full">
                {/* Logo */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    <motion.div
                        className="w-12 h-12 rounded-full bg-copper/10 border-2 border-copper flex items-center  justify-center cursor-pointer font-mono"
                        style={{ color: "var(--copper)" }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "var(--copper)",
                            color: "var(--cream)",
                            borderColor: "var(--copper)",
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <span>
                            NR
                        </span>
                    </motion.div>
                </motion.div>

                {/* Navigation */}
                <nav className="flex-1 flex items-center">
                    <ul className="space-y-6">
                        {items.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <motion.li
                                    key={item.label}
                                    className="relative group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    <motion.button
                                        className="w-12 h-12 rounded-lg bg-charcoal border border-ink2 flex items-center justify-center text-muted relative overflow-hidden cursor-pointer"
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "var(--copper)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-copper/10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        />

                                        <motion.div
                                            animate={{
                                                color: hoveredIndex === index ? "var(--copper)" : "var(--muted)",
                                                y: hoveredIndex === index ? -2 : 0
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Icon size={20} />
                                        </motion.div>

                                        {/* Active indicator */}
                                        <motion.div
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-copper rounded-r-full"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: hoveredIndex === index ? 20 : 0,
                                                opacity: hoveredIndex === index ? 1 : 0
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    </motion.button>

                                    {/* Tooltip */}
                                    <motion.div
                                        className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-ink rounded-md pointer-events-none whitespace-nowrap"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            x: hoveredIndex === index ? 0 : -10
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-sm text-cream font-ui">{item.label}</span>
                                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-ink" />
                                    </motion.div>
                                </motion.li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Social Links */}
                <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                >
                    {/* Divider */}
                    <div className="w-8 h-px bg-ink2 mx-auto mb-4" />

                    <motion.a
                        href="https://github.com/naufalrafianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-ink2 flex items-center justify-center text-muted relative overflow-hidden group"
                        whileHover={{
                            scale: 1.1,
                            borderColor: "var(--copper)",
                            backgroundColor: "var(--copper)",
                            color: "var(--charcoal)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <FaGithub size={18} />
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com/in/naufalrafianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-ink2 flex items-center justify-center text-muted relative overflow-hidden"
                        whileHover={{
                            scale: 1.1,
                            borderColor: "var(--copper)",
                            backgroundColor: "var(--copper)",
                            color: "var(--charcoal)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <FaLinkedin size={18} />
                    </motion.a>
                </motion.div>
            </div>
        </aside>
    )
}
