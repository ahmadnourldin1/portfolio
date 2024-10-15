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
    [NavbarLinksEnums.WORKS] : {
        name : "Work",
        link : "/work"
    },
    [NavbarLinksEnums.ABOUT_ME] : { 
        name : "About-me",
        link : "/about-me"
    },
    [NavbarLinksEnums.CONTACTS] : {
        name : "Contacts",
        link : "/contact"   
    }
}