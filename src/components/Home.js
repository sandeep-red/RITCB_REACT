import React from 'react'
import {Link} from  'react-router-dom'
import '../css/home.css'
function Home() {
    return (
        <div _ngcontent-rni-c21="" data-gr-c-s-loaded="true" cz-shortcut-listen="true" className="vsc-initialized">
    <header _ngcontent-rni-c21=""></header>
    <main _ngcontent-rni-c21="" role="main">
        <p style={{color: "rgb(241, 185, 81)", fontSize: "72px", fontWeight: "900", marginBottom: "10px", marginTop: "50px", textAlign: "center"}}>WELCOME TO RITCB</p>
        <p style={{color: "rgb(79, 153, 153)", fontSize: "48px", fontWeight: "800", marginBottom: "50px", marginTop: "0px", textAlign: "center"}}>RIT CANTEEN BUDDY</p>
        <div className="jumbotron" id="nopad">
            <div className="container">
                <h1 className="display-3">We are RITCB !</h1>
                <p>We bring you the best solution to your hunger problem this lockdown even in
                    your college. Now, who needs a hot Masala Dosa !</p>
                <Link className="link" to='/menu'><p><a className="btn btn-dark btn-lg" role="button">I'm in !</a></p></Link>
            </div>
        </div>

        <div className="jumbotron" id="j1">
            <div className="container">

            </div>
        </div>
        <hr className="featurette-divider"/>
        <div _ngcontent-rni-c21="" className="row featurette">
            <div _ngcontent-rni-c21="" className="col-md-7">
                <h2 _ngcontent-rni-c21="" className="featurette-heading">Best way to order food<span _ngcontent-rni-c21=""
                        className="text-muted"> Your college Canteen Buddy</span></h2>
                <p _ngcontent-rni-c21="" className="lead">RITCB, RITCB, RITCB is all that'll hear once it is in the game !
                    Your perfect buddy for all your college canteens. We care about your food, that's why we present you
                    RITCB</p>
            </div>
            <div _ngcontent-rni-c21="" id="pic1" className="col-md-5"><img _ngcontent-rni-c21=""
                    data-src="holder.js/500x500/auto" alt="500x500"
                    src="https://cdn.shopify.com/s/files/1/1455/6592/products/WL_1000x.jpg?v=1564462051"
                    data-holder-rendered="true" className="featurette-image img-fluid mx-auto"
                    style={{width: "500px", height: "500px"}} />
            </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">When hunger strikes !</h1>
                <p>When hunger strikes you, even corona can't stop you ! Use RITCB and get your
                    food safe and sound to beat corona and hunger both !</p>
             <Link className="link" to='/about'><p><a className="btn btn-dark btn-lg" role="button">Yay !</a></p></Link>
            </div>
        </div>

        <div className="jumbotron" id="j2">
            <div className="container">

            </div>
        </div>
        <hr className="featurette-divider" />
        <div _ngcontent-rni-c21="" className="row featurette">
            <div _ngcontent-rni-c21="" className="col-md-7 order-md-2">
                <h2 _ngcontent-rni-c21="" className="featurette-heading">Sky's the Limit !<span _ngcontent-rni-c21=""
                        className="text-muted"> There's a lot of option to choose from for all your cravings</span></h2>
                <p _ngcontent-rni-c21="" className="lead">After your hectic classNamees all you need is a hot Masala Dosa and a
                    cup of chai ! But we bring you more to your plate ! We care about your Lunch !</p>
            </div>
            <div _ngcontent-rni-c21="" id="pic2" className="col-md-5 order-md-1"><img _ngcontent-rni-c21=""
                    data-src="holder.js/500x500/auto" alt="500x500"
                    src="https://www.lancashiretelegraph.co.uk/resources/images/10881093?type=responsive-gallery-fullscreen"
                    data-holder-rendered="true" className="featurette-image img-fluid mx-auto"
                    style={{width: "500px", height: "500px"}}/>
            </div>
        </div>

        <hr className="featurette-divider" />

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Hurrah ! That's RITCB for you</h1>
                <p>Register if not already registered and get your food in style ! Why wait the
                    wait when you've got RITCB in your pockets !</p>
               <Link className="link" to='/menu'><p><a className="btn btn-dark btn-lg" role="button">Let's go !</a></p></Link>
            </div>
        </div>

        <div className="jumbotron" id="j3">
            <div className="container">

            </div>
        </div>

        <hr className="featurette-divider"/>

        <footer className="container">

            <p style={{textAlign:"center"}}>RITCB© ℗®™</p>
        </footer>
    </main><svg _ngcontent-rni-c21="" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"
        preserveAspectRatio="none"
        style={{display: "none", visibility: "hidden", position: "absolute", top: "-100%", left: "-100%"}}>
        <defs _ngcontent-rni-c21="">
            <style _ngcontent-rni-c21="" type="text/css"></style>
        </defs><text _ngcontent-rni-c21="" x="0" y="25"
            style={{fontWeight: "bold", fontSize: "25pt", fontFamily: "Arial, Helvetica, Open Sans, sans-serif"}}>500x500</text>
    </svg>
</div>
    )
}

export default Home
