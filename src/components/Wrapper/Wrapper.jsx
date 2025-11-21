import { useState } from 'react';
import Aside from "../Aside/Aside";
import MainContent from "../MainContent/MainContent";
import './Wrapper.css';

export default function Wrapper(){
    const [activePage, setActivePage] = useState("dashboard");
    return(
        <>
            <div class="wrapper">
                <Aside onSelectPage={setActivePage} activePage={activePage} />
                <MainContent activePage={activePage} />
            </div>
        </>
    )
}