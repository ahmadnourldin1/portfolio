import { NavbarLinksEnums } from "../enums/navbar-links-enum";

interface props {
    name : string
    link : string
}

export const linksMap: Readonly<Record<NavbarLinksEnums, props>> = {
    [NavbarLinksEnums.HOME] : {
        name : "Home",
        link : "/"
    },
    [NavbarLinksEnums.ABOUT] : {
        name : "About",
        link : "/about"
    },
    [NavbarLinksEnums.PROJECTS] : { 
        name : "Projects",
        link : "/projects"
    },
    [NavbarLinksEnums.CONTACT] : {
        name : "Contact",
        link : "/contact"   
    }
}