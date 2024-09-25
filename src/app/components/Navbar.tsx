"use client";
import React, { useState } from "react";
import { cn } from "../utils/utils";
import Link from "next/link";
import { Menu, MenuItem } from "./ui/moving-border";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="About">
                    </MenuItem>
                </Link>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Projects">
                    </MenuItem>
                </Link>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Testimonials">
                    </MenuItem>
                </Link>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar