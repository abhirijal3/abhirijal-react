import './HomePage.css';
import Navbar from '../Components/Navbar'
import HomepageSlider from '../Components/HomepageSlider';
import Footer from '../Components/Footer';
import Technologies from '../Components/Technologies';


const HomePage = () => {

    return (
        <div>
            <Navbar />
            <HomepageSlider />
            <Technologies />
            <Footer/>
        </div>
    );
}

export default HomePage;