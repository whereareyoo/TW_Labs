import Header from "../layouts/Header";
import eu from "../util/europe.png";
import CardPage from "../components/CardPage";
import Form from "../components/Form";
import Footer from "../layouts/Footer";

function Home()
{
    return(
        <>
            <Header/>
            <div className="main_picture parallax">
                <h1>EUROTOUR</h1>
                <h2>Discover Europe by traveling</h2>
            </div>

            <div className="aboutUs">
                <h1>About Us</h1>
                <p style={{fontSize: "x-large"}}><img src={eu} id="europePic"/> We are the new company that is
                activating in the tourism aria. We offer the tourism services for everybody who loves traveling,
                especially around european countries. Our main purpose is to help you to discover your continent
                by traveling and discovering new
                interesting things, by seeing beautiful sights, historical objects, etc Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
                ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
                in odio.
                Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi,
                sed ullamcorper
                ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida
                venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                Cras ac leo purus.
                Mauris quis diam velit.</p>
            </div>
    {/*<div className="parallax"></div>*/}
            <CardPage/>
                <div className="testimonials">
                    <div className="container">
                        <img src={eu} id="avatar"/>
                        <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                        <p>John Doe saved us from a web disaster.</p>
                    </div>
                    <div className="container">
                        <img src={eu} id="avatar"/>
                        <p><span>Kek Kek.</span> CEO at Mighty Schools.</p>
                        <p>John Doe saved us from a web disaster.</p>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Home;