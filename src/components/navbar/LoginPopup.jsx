import { useRef, useState } from 'react';
const LoginPopup = () => {
    const [formType, setFormType] = useState('login');
    const [login, setLogin] = useState(true);
    const email = useRef();
    const password = useRef();
    const SignIn = (e) => {
        e.preventDefault();
        setLogin(!login);
    }
    const Signup = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    const CancelSignIn = () => {
        setFormType('signup');
        setLogin(!login);
    }
    const CancelSignUp = () => {
        setFormType('login');
        setLogin(!login);
    }

    const renderForm = () => {
        switch (formType) {
            case 'signup':
                return (
                    <div className={`${login && "activeLogin"} containerLogin`} >
                        <h2 className="titleLogin">تسجيل اشتراك</h2>
                        <form onSubmit={Signup} action="https://elhana.sintac.shop/api/signUp" method='GET' >
                            <input type="text" placeholder="اسم المستخدم" className="inputLogin" required name="name" />
                            <input type="email" placeholder="البريد الإلكتروني" className="inputLogin" required name="email" />
                            <input type="password" placeholder="كلمة المرور" className="inputLogin" required name='password ' />
                            <input type="password" placeholder="تأكيد كلمة المرور" className="inputLogin" required name='conferm-password' />
                            <div className="buttonContainer">
                                <button className="submitButton">اشترك</button>
                                <button onClick={CancelSignUp} className="cancelButton">إلغاء</button>
                            </div>
                        </form>
                        <p className="switchText">
                            لديك حساب بالفعل؟ <span onClick={() => setFormType('login')} className="switchLink">سجل دخول</span>
                        </p>
                    </div>
                );
            case 'login':
                return (
                    <div className={`${login && "activeLogin"} containerLogin`}>
                        <h2 className="titleLogin">تسجيل الدخول</h2>
                        <form onSubmit={SignIn}>
                            <input type="email" ref={email} placeholder="البريد الإلكتروني" className="inputLogin" required name="email" />
                            <input type="password" ref={password} placeholder="كلمة المرور" className="inputLogin" required name="password" />
                            <div className="buttonContainer">
                                <button className="submitButton">دخول</button>
                                <button onClick={CancelSignIn} className="cancelButton">إلغاء</button>
                            </div>
                        </form>
                        <p className="switchText">
                            ليس لديك حساب؟ <span onClick={() => setFormType('signup')} className="switchLink">إشترك الآن</span>
                        </p>
                    </div>
                );
            case 'logout':
                return (
                    <div className={`${login && "activeLogin"} containerLogin`}>
                        <h2 className="titleLogin">تسجيل خروج</h2>
                        <p>هل أنت متأكد من رغبتك في الخروج؟</p>
                        <div className="buttonContainer">
                            <button className="submitButton">خروج</button>
                            <button onClick={() => setFormType('login')} className="cancelButton">إلغاء</button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderForm()}
        </div>
    );
};

export default LoginPopup;
