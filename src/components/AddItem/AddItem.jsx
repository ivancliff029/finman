import './AddItem.css';
import { useState } from 'react';

export default function AddItem() {
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (item && category && amount) {
            setIsFormFilled(true);
            setItem('');
            setCategory('');
            setAmount('');
            console.log({ item, category, amount });
        }
    }
    function closeSuccessMessage() {
        setIsFormFilled(false);
        setItem('');
        setCategory('');
        setAmount('');
    }


    return (
        <>
            <div className="item-form">
                <div className="wrapper">
                    <div>
                        <h2>Add New Item</h2>
                        {isFormFilled && <div className="success-message">Item added successfully! <span className="success-message-close" onClick={closeSuccessMessage}>X</span></div>}
                        <form onSubmit={handleSubmit}>
                            <label for="item-name">Item</label>
                            <input onChange={(e) => setItem(e.target.value)} type="text" name="item" />
                            <br />
                            <label for="category">Category</label>
                            <select onChange={(e) => setCategory(e.target.value)}>
                                {/*this should be retrieved from the database*/}
                                <option>Savings</option>
                                <option>Investments</option>
                                <option>House Hold</option>
                            </select>
                            <br />
                            <label for="amount">Amount</label>
                            <input onChange={(e) => setAmount(e.target.value)} type="text" name="amount" />
                            <br />
                            <button type="submit">Add +</button>
                        </form>
                    </div>
                    <div className="edit">
                        <h2>Edit Items</h2>
                        <ol>
                            <li>BTC - 50,000 Ugx <a href="#">Delete</a> <a href="#">Edit</a></li>
                            <li>Bonds  - 60,000 Ugx <a href="#">Delete</a> <a href="#">Edit</a></li>
                            <li>Office Chair - 250,000 Ugx <a href="#">Delete</a> <a href="#">Edit</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}