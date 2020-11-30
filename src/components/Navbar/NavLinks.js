
import {NavLinkItem} from './NavbarElement';

function NavLinks() {
    return (
        <>
            <NavLinkItem to="home"  duration={600} smooth={true} spy={true}>Home</NavLinkItem>
            <NavLinkItem to="about" duration={600} smooth={true} spy={true} delay={600}>About</NavLinkItem>
            <NavLinkItem to="service" duration={600} smooth={true} spy={true} delay={600}>Service</NavLinkItem>
            <NavLinkItem to="portfolio" duration={600} smooth={true} spy={true} delay={600}>portfolio</NavLinkItem>
            <NavLinkItem to="contact" duration={600} smooth={true} spy={true} delay={600}>contact</NavLinkItem>  
        </>
    )
}

export default NavLinks;
