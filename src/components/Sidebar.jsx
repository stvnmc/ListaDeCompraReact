import React, { useContext } from "react";

import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext)

    return (
        <section className={`Sidebar ${isOpen ? 'open' : ''}`}>
            <div>Sidebar</div>
        </section>
    )
}

export default Sidebar