import Header from './components/homepage/header/Header';
import About from './components/homepage/about/About';
import Services from './components/homepage/services/Services';
import Features from './components/homepage/features/Features';
import Footer from './components/homepage/footer/Footer';

const Home = ({brandName}) => {

    return (
        <>
           <Header bn={brandName}/>
                <About bn={brandName} />
                    <Services />
                <Features bn={brandName} />
           <Footer bn={brandName} />
        </>
    );
}
 
export default Home;