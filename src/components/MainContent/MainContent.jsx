import AddItem from "../AddItem/AddItem";
import ViewItems from "../ViewItems/ViewItems";
import ContentNav from "../ContentNav/ContentNav";

import './MainContent.css';
import AddCategory from "../AddCategory/AddCategory";
import Landing from "../Landing/Landing";

export default function MainContent({activePage}) {

    const renderPage = () => {
        switch(activePage){
            case "add-item":
                return <AddItem />;
            case "view-items":
                return <ViewItems />
            case "add-category":
                return <AddCategory />
            default:
                return (<>
                <Landing />
                </>);
        }
    }

    return(
        <>
        <main>
            <ContentNav />
            {renderPage()}
        </main>
        </>
    )
}