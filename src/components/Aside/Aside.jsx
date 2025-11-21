import './Aside.css';

export default function Aside({ onSelectPage, activePage}){
    return(
        <>
            <aside>
                <ul>
                    <li
                        className={activePage === "dashboard" ? "active" : ""}
                        onClick={()=>onSelectPage("view-items")}
                        >
                            View Items
                    </li>
                    <li
                        className={activePage === "dashboard" ? "active" : ""}
                        onClick={()=>onSelectPage("add-item")}
                        >
                            Add Item
                    </li>
                    <li
                        className={activePage === "dashboard" ? "active" : ""}
                        onClick={()=>onSelectPage("add-category")}
                        >
                            Add Category
                    </li>
                </ul>
            </aside>
        </>
    )
}