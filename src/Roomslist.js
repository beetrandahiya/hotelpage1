import img1 from './gardenview-listimg.jpg';
import img2 from './garden-view-suite-img.jpg';
import img3 from './seacabinlistimg.jpg';
import img4 from './houselistimg.jpg';
export default function Roomslist(){
    return (
        <div className="roomslist">
            <div className="roomslist-header">
            Rooms
            </div>
            <div className="room">
                <img src={img1} alt="room1" />
                <div className="room-info">
                    <h3>Garden View Cabin</h3>
                    <p>
                        Wake up to the chirping of birds and the lush foliage of well-tended gardens at our north Goa beach hotel.
                    </p>
                </div>
            </div>
            <div className="room">
                <img src={img2} alt="room2" />
                <div className="room-info">
                    <h3>Garden View Suite</h3>
                    <p>
                        In the midst of a coconut grove, find yourself surrounded by the sights and sounds of Goa's breathtaking tropical beauty. (5 suites)
                    </p>
                </div>
            </div>
            <div className="room">
                <img src={img3} alt="room3" />
                <div className="room-info">
                    <h3>Sea View Cabin</h3>
                    <p>
                    Hear the call of the waves and taste the ocean air from the cosiest beach view rooms in Goa that opens out to the soft sands of Morjim beach. (5 cabins)                    
                    </p>
                </div>
            </div>
            <div className="room">
                <img src={img4} alt="room4" />
                <div className="room-info">
                    <h3>Beach House</h3>
                    <p>
                    An old Portuguese home has been refurbished to offer you a serene holiday home in the middle of our north Goa beach hotel.
                    </p>               
                </div>
            </div>
            <div className="room">
                <img src={img4} alt="room4" />
                <div className="room-info">
                    <h3>Casa de Mudança</h3>
                    <p>
                    Time is on your side in this cute cottage, where a large shared balcony brings guests together after a swell day at the beach. (5 rooms)                    
                    </p>                
                </div>
            </div>
        </div>
    );
}
