// Import CSS for Features
import './Features.style.css';

// Import Features images
import laptop from './../../../images/illustration-laptop-desktop.svg';

const Features = ({bn}) => {
    return (
        <>
            <div className="container f-section">
                <h3>لماذا {bn} ؟</h3>
                <div className="row">
                    <div className="col-md-6 f-info">
                        <div className="container">
                            <h4>لوحة تحكم بسيطة</h4>
                            <p>نوفر لك لوحة تحكم بسيطة و سلسة لنوفر عليك سهولة الاستخدام</p>
                        </div>
                        <div className="container">
                            <h4>ثمن مناسب</h4>
                            <p>يوجد لدينا أفضل الاثمنة ويوجد لدينا عرض رائعة</p>
                        </div>
                        <div className="container">
                            <h4>دعم نشيط</h4>
                            <p>مركز الدعم نشيط 24 ساعة و في 7 أيام يعني ادا واجهتك أي مشكلة فنحن سوف نرد عليك حالا</p>
                        </div>
                    </div>
                    <div className="col-md-6 f-image d-none d-lg-block">
                        <img src={laptop} alt="Laptop" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Features;