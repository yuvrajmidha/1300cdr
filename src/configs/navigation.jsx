import {FaShippingFast, FaWineBottle, FaBox, FaWpforms, FaListAlt} from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";

const NavigationConfig = [
    {   
        key: "dashboard",
        title: "Dashboard",
        icon: RiHome6Fill,
        path: '/dashboard'
    },
    {   
        key: "order",
        title: "Orders",
        icon: FaListAlt,
        path: '/orders'
    },
    {   
        key: "shipments",
        title: "Shipments",
        icon: FaShippingFast,
        path: '/shipments'
    },
    {
        key:"billing",
        title: "Billing / Inventory Logs",
        icon: FaWpforms,
        path: '/billing/inventorylogs',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing / Wallet Recharges",
        icon: FaWpforms,
        path: '/billing/walletrecharges',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing / COD Remittance",
        icon: FaWpforms,
        path: '/billing/codremittance',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/codremittance'
    },
    {
        key:"products",
        title: "Products",
        icon: FaWineBottle,
        path: '/products',
        hidden: true
    },
    {
        key:"inventory",
        title: "Dropstocks Inventory",
        icon: FaBox,
        path: '/dropstocks-inventory',
        hidden: true
    },
    {
        key:"inventory",
        title: "Inventory",
        icon: FaBox,
        path: '/inventory',
        hidden: true
    },
    {
        key:"settings",
        title: "Settings",
        icon: FaBox,
        path: '/settings',
        hidden: true
    },
    {
        key:"support",
        title: "Support",
        icon: FaBox,
        path: '/support',
        hidden: true
    },
]


export default NavigationConfig