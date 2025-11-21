import './ViewItems.css';

export default function ViewItems() {
    return (
        <>
            <div>
                <h1>All Items</h1>
                <div className="stats">
                    <div className="card">
                        <h2>Investments</h2>
                        <ol>
                            <li>BTC - 50,000 Ugx</li>
                            <li>Bonds  - 60,000 Ugx</li>
                            <li>Office Chair - 250,000 Ugx</li>
                        </ol>
                    </div>
                    <div className="card">
                        <h2>Savings</h2>
                        <ol>
                            <li>BTC - 50,000 Ugx</li>
                            <li>Bonds  - 60,000 Ugx</li>
                            <li>Office Chair - 250,000 Ugx</li>
                        </ol>
                    </div>
                    <div className="card">
                        <h2>House Hold</h2><ol>
                            <li>BTC - 50,000 Ugx</li>
                            <li>Bonds  - 60,000 Ugx</li>
                            <li>Office Chair - 250,000 Ugx</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}