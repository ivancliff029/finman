import { useState } from 'react';

export default function AddCategory() {
    const [ category, setCategory ] = useState('');
    const [ isCategorySubmitted, setIsCategorySubmitted ] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if(category){
            setIsCategorySubmitted(true);
        }
    }
    return (
        <>
            <div>
                <div>
                    {isCategorySubmitted && (<div>Category Updated</div>)}
                    <form onSubmit={handleSubmit}>
                        <label for="Category">Category</label>
                        <br />
                        <input type="text" name="category" onChange={(e)=>setCategory(e.target.value)}/>
                        <button type="submit">Add Category</button>
                    </form>
                </div>
            </div>
        </>
    )
}