import { FaAddressBook, FaBriefcase, FaHouseUser } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export const MenuData = [
    {
        id: 1,
        title: 'Home',
        url: '#home',
        class: 'nav-links',
        icon: FaHouseUser,
    },
    {
        id: 2,
        title: 'About',
        url: '#about',
        class: 'nav-links',
        icon: FaCircleInfo
    },
    {
        id: 3,
        title: 'Services',
        url: '#services',
        class: 'nav-links',
        icon: FaBriefcase
    },
    {
        id: 4,
        title: 'Contact',
        url: '#contact',
        class: 'nav-links',
        icon: FaAddressBook
    },
    {
        id: 5,
        title: 'Sign Up',
        url: '#signup',
        class: 'nav-links-mobile'
    }
]