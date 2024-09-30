"use client";
import React, { useState, useRef } from "react";
import { cn } from "../utils/utils";
import { Menu, MenuItem } from "./ui/moving-border";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    // Reference for the Projects section
    const projectsRef = useRef<HTMLDivElement | null>(null);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    // Scroll to the bottom of the page
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div onClick={scrollToTop}>
                    <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
                </div>
                <div onClick={scrollToBottom}>
                    <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                </div>
            </Menu>
        </div>
    );
};

export default Navbar;
