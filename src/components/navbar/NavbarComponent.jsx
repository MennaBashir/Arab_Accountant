import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ag from './../../assets/AG.jpg';
import home from "./../../assets/house.svg";
import search from "./../../assets/search.svg";
import { Link, NavLink } from "react-router-dom";
import './NavbarComponent.css';
import user from "./../../assets/user2.png";
import LoginPopup from './LoginPopup';
import { useState } from "react"
function NavbarComponent() {
    const [login, setLogin] = useState(false)
    return (
        <>
            <div className='pt-4'>
                <Link to={'/'}><img style={{ height: 100 }} src={ag} alt='not found' /></Link>
            </div>
            <Navbar expand="lg" className="mt-3 mb-4 navbar" variant="dark" bg="dark" >
                <Container fluid>
                    <NavDropdown className='dropdown' title={<img style={{ width: 30 }} src={home} alt='notFound' />} id="navbarScrollingDropdown">
                        <Link to="/interview">اسألة المقابلات</Link>
                        <NavDropdown.Divider />
                        <Link to="/erp">
                            شرح برامج ERP
                        </Link>
                        <NavDropdown.Divider />
                        <Link to="/costaccount">
                            قسم محاسبة التكاليف
                        </Link>
                    </NavDropdown>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='linkbar'>
                        <Nav
                            className="d-flex gap-4 me-3 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/accounting">قسم المحاسبة</NavLink>
                            <NavLink to="/review">قسم المراجعة</NavLink>
                            <NavLink to="/tax">
                                قسم الزكاة والضرائب
                            </NavLink>
                            <NavLink to="/organization">منظمات ومؤسسات مهنية</NavLink>
                            <NavLink to="/carer">أخبار مهنية</NavLink>
                            <NavLink to="/formation">
                                تأسيس الشركات
                            </NavLink>
                        </Nav>
                        <div className='loginSearch me-auto'>
                            <NavDropdown className='searchfield' title={<Button variant="outline-primary"><img src={search} alt='notFound' /></Button>} id="navbarScrollingDropdown">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </NavDropdown>
                            <Nav>
                                <img onClick={() => setLogin(!login)} className='imgUser' src={user} alt="notFound" />
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {login && <LoginPopup />}
        </>
    )
}
export default NavbarComponent;