// Import CSS for Services
import './Services.style.css';

// Import Services images
import web from './../../../images/web.png';
import marketing from './../../../images/marketing.png';
import logoDesign from './../../../images/logo-design.png';

const Services = () => {
    return (
        <>
            <div className="bg-services container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <img src={web} alt="Web" />
                                </div>
                                <h5 className='card-title'>تصميم المواقع</h5>
                                <p className='card-text'>نقوم بتحويل متجرك أو خدمتك لموقع الكتروني ليسهل على عملائك التواصل معك وشراء خدمتك</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <img src={marketing} alt="Marketing" />
                                </div>
                                <h5 className='card-title'>عمل إشهار</h5>
                                <p className='card-text'>نقوم بعمل لك إشهار احترافي في أشهر منصات التواصل لتصل الى الناس المهتمين بخدمتك فقط</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <img src={logoDesign} alt="Logo desgin" />
                                </div>
                                <h5 className='card-title'>تصميم شعار</h5>
                                <p className='card-text'>نوفر لك شعار لخدمتك حتى تتميز عن الاخرين ويمكنهم التعرف على خدمتك من الشعار</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Services;