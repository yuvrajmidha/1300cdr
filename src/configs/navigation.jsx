import {FaShippingFast, FaWineBottle, FaBox, FaWpforms, FaListAlt} from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";

const NavigationConfig = [
    {   
        key: "dashboard",
        title: "Home",
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
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/shipping-charges',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/invoices',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/inventory-logs',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/wallet-logs',
        hidden: true
    },
    {
        key:"billing",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/cod-remittance'
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