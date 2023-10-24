"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-white"
        >

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Carrito
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
