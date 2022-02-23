import img1 from './abt-bg-1.jpg';

export default function Aboutheader(){
    return (
        <>
        <div className="abouttext">
            <h1>ABOUT US</h1>
            <p>
            Back in the tropical winter of 2002-03, Montego Bay was a simple space offering 5 basic, 
            clean guest rooms in the village of Morjim in north Goa. The simplicity, hygiene and warmth have remained, 
            and today, we are the best place to stay in Goa, with 45 cabins and suites with luxury comforts and furnishings.
            Our little micro-community on one of Goa's most pristine beaches promises a tranquil getaway in the lap of nature.
            Across 10,000 square feet, our beachfront property boasts a coconut grove riddled with flowering and fruit-bearing trees,
            and two event lawns that stretch towards the sea. At Montego Bay Beach Village, 
            our aim is to offer you space to make your own moments - as tranquil or lively as you wish. 
            From hammocks and picnic benches tucked away in cosy corners, ayurvedic massages and indoor games, 
            to dancing, pool and live music, we've got it all for everyone.      

            </p>  
            <img src={img1} alt="bg" />
        </div>  
        <div className="seegoa">
            <div className="seegoa-text">
                <h1>SEE GOA THE MONTEGO BAY WAY</h1>
                <p>
                Enjoy that long-awaited beachside vacation in Goa without ever leaving Montego Bay Beach Village.
                We offer a fantastic glimpse of the susegado (meaning 'relaxed') life - quiet days in lush natural beauty,
                lazy swims in the pool or sea, long sunset walks on the beach, fresh seafood delights and fun cocktails to go with live music under the stars.
                </p>
            </div>
            <div className='seegoa-img'>
                <div className='seegoa-cont'>
                    <div className='seegoa-img-text'>Gathering</div>
                </div>
                <div className='seegoa-cont'>
                    <div className='seegoa-img-text'> Nice Food</div>
                </div>
            </div>
        </div>
        </>
);
}