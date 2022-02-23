import img1 from './seasuiteimg.jpg';
import img2 from './seacabinlistimg.jpg';

function Cards(){
    return(
        <div className="cards">
            <div className="card">
                <img src={img1} alt="img1" />
                <div className="card-text">
                    <h2>
Beach Side Suite                    </h2>
<h3>1-4 persons</h3>

                    <p>
                    In the midst of a coconut grove, find yourself surrounded by the sights and sounds of Goa’s breathtaking tropical beauty. (5 su

</p>
<button>
    BOOK NOW +
</button>
                </div>
            </div>
            <div className="card">
                <img src={img2} alt="img2" />
                <div className="card-text">
                    <h2>
Sea View Cabin                  </h2>
<h3>1-2 persons</h3>
                    <p>
                    Hear the call of the waves and taste the ocean air from the cosiest beach view rooms in Goa that opens out to the soft sands.

</p>
<button>
    BOOK NOW +
</button>
                </div>
            </div>
            </div>);


}

export default Cards;