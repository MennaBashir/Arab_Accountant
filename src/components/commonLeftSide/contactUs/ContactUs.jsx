import "./ContactUs.css";
import { Form, Button } from 'react-bootstrap';
import CommonHead from "./../../commonHead/CommonHead";
function ContactUs() {
    return (
        <div className="mb-5">
            <CommonHead headTitle={"تواصل معنا"} />
            <div className="contactUs">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>الاسم</Form.Label>
                        <Form.Control required type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>البريد الألكترونى</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> الرسالة</Form.Label>
                        <Form.Control as="textarea" rows={3} required />
                    </Form.Group>
                    <Button type="submit" style={{ backgroundColor: `#0484d4`, border: "none" }}>ارسال</Button>
                </Form>
            </div>
        </div>
    )
}
export default ContactUs;