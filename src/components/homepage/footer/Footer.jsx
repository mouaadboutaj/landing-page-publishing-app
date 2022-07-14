// Import CSS for Footer
import './Footer.style.css';

const Footer = ({bn}) => {
    return (
        <>
            <div className="container-fluid footer-section" id='contact'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="container footer-title">
                            <h2>{bn}</h2>
                            <p>صنعت هده المنصة لتساعدتك على فهم اهمية التسويق الرقمي وجلب الزوار المهتمين, هدفها هو ان تساعد العالم العربي على مواكبة التسويق الرقمي ونشر اعلانك للزبائن المهتمين</p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 contact-section">
                        <h4>إتصل بنا</h4>
                        <div className="container">
                            <div className="row contact-inputs">
                                <input type="text" placeholder='المرجو إدخال إسمك...' />
                                <input type="text" placeholder='المرجو إدخال بريدك الاكتروني...' />
                                <textarea name="msg" id="" cols="30" rows="10" placeholder='إدخال رسالتك هنا...'></textarea>
                                <button type="submit">إرسال</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containter text-center text-dark fw-bold py-4 px-0 text-uppercase">
                حقوق النشر محفوظة {new Date().getFullYear()} لدى {bn}
            </div>
        </>
    );
}
 
export default Footer;