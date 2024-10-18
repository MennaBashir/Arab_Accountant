import './SubscribeNewsletter.css';
import { useState } from 'react';
function SubscribeNewsletter() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (value) => {
        setEmail(value);
        setError(false);
    };

    const handleSubmit = () => {
        const emailPattern = /^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/;
        const error = !emailPattern.test(email);

        if (error) {
            setError(true);
        } else {
            console.log(email);
        }
    };
    return (
        <div className='subscribe'>
            <section>
                <h1>الاشتراك فى النشرة الأخبارية</h1>
                <p>اشترك معنا ليصلك كل جديد...</p>
                <div>
                    <input
                        className={error ? "error" : ""}
                        type="text"
                        placeholder="بريدك الالكتروني"
                        value={email}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <button onClick={handleSubmit}>
                        ارسال
                    </button>
                </div>
            </section>
        </div>
    )
}
export default SubscribeNewsletter;