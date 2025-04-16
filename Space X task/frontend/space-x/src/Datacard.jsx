import './App.css';
function Card(props){
    return (
        <div className="card">
            <h1>SpaceX Latest Launch</h1>
            {props.data ? (
                <div>
                    <h2>Launch Name :{props.data.launchName}</h2>
                    <p>Launch Date: {new Date(props.data.launchDate).toLocaleString()}</p>
                    <p>Rocket Name: {props.data.rocketName}</p>
                    <p>Launchpad Name: {props.data.launchpadName}</p>
                    <hr />
                    <h3>Total Launches: {props.data.totalLaunches}</h3>
                </div>
            ) : (
                <p>Loading Data Please Wait...</p>
            )}
        </div>
    )
}

export default Card;