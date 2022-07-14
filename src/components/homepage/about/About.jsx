// Import CSS for About
import './About.style.css';

// Import About images
import editor from './../../../images/illustration-editor-desktop.svg';

const About = ({bn}) => {

    return (
        <>
            <div className="container about-section" id='about'>
                <h3 style={{margin : '100px', fontSize: '50px'}}>مــــن نــــحـــن ؟</h3>
                <div className="row">
                    <div className="image-col col-md-6" >
                        <img src={editor} className="bg-img" />
                    </div>
                    <div className="col-md-6 info">
                        <h4>"هدفنا"</h4>
                        <p>
                            {bn} هو موقع يقدم خدمات للتسويق وهدفنا هو ان 
  الجميع يعرف أن التسويق الرقمي في عصرنا يدعم النمو السريع للاعمال</p>
                        <p>مهمتنا هي ان نساعدكم على الطريقة الصحيحة للتسويق</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default About;