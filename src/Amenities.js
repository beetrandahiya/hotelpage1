import am1 from './am1.png';
import am2 from './am2.png';
import am3 from './am3.png';
import am4 from './am4.png';

function Amenities(){
    return(
        <div className="amenities">
            <div className="amenities-text">
                <h1>
                AMENITIES: EVERYTHING YOU NEED, BY THE BEACH
                </h1>
                <p>
                Consider yourself at a sea-side hideaway where your privacy is our priority.
                Take time for yourself in the comfort of our air-conditioned accommodation surrounded by the fresh sounds of nature.
                And when you're ready, we've got a relaxing pool to laze about in, a restaurant
                overlooking the beach serving mouthwatering food and drinks all day,
                a special play area for your children and a wide open stretch of sand and sea for your family and fur babies.
                </p>
            </div>
            <div className="amenities-container">
            <div class="feature">
                <img src={am1} alt=""/>
                <h2>
                FREE WIFI</h2>
            </div>
            <div class="feature">
                <img src={am2} alt=""/>
                <h2>
               AIR CONDITIONER</h2>
            </div>
            <div class="feature">
                <img src={am3} alt=""/>
                <h2>
                MINI BAR</h2>
            </div>
            <div class="feature">
                <img src={am4} alt=""/>
                <h2>
                IN-HOUSE RESTAURANT</h2>
            </div>
            </div>
        </div>
    );
}

export default Amenities;