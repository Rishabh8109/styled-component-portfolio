
import { SidebarEl ,SidebarLinkItem} from "./SidebarElement";
import Logo from '../Navbar/Logo';


function Sidebar({open}) {
  

    return (
            <SidebarEl open={open}>
                   <div className="text-center pl-5 py-3">
                     <Logo />
                   </div>
                   <SidebarLinkItem to="home" className="nav-link"
                      duration={600} smooth={true} spy={true}>Home</SidebarLinkItem>
                    <SidebarLinkItem to="about" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600} >About</SidebarLinkItem>
                    <SidebarLinkItem to="service" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600} >Service</SidebarLinkItem>
                    <SidebarLinkItem to="portfolio" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600} >Work</SidebarLinkItem>
                    <SidebarLinkItem to="contact" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600}>Contact</SidebarLinkItem>
             </SidebarEl>
    )
}

export default Sidebar;
