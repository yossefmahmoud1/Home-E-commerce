import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export const nav = [
  { path: "/", text: "Home" },
  { path: "/features", text: "Features" },
  { path: "/shop", text: "Shop" },
  { path: "/page", text: "Pages" },
  { path: "/blog", text: "Blog" },
  { path: "/contact", text: "Contact" },
];

export const aweicon = [
  
  { icon: <FaFacebookF className="mr-4" /> },
  { icon: <FaInstagram className="mr-4" /> },
  { icon: <FaYoutube className="mr-4" /> },
  { icon: <FaTwitter className="mr-4" /> },
];

export const sliderdata = [
  { img: "../../public/img/Hero/Heroimg.jpg" },
  { img: "../../public/img/Hero/Heroimg2.jpg" },
  { img: "../../public/img/Hero/Heroimg3.jpg" },
  { img: "../../public/img/Hero/Heroimg4.jpg" },
  { img: "../../public/img/Hero/id1-banner2.jpg" },

];

export const category = [
  { img: "../img/category/category1.png", category: "Bedroom" },
  { img: "../img/category/category7.png", category: "Office" },
  { img: "../img/category/category6.png", category: "Lighting" },
  { img: "../img/category/category5.png", category: "Bathroom" },
  { img: "../img/category/category4.png", category: "Kitchen" },
  { img: "../img/category/category3.png", category: "Interior" },
  { img: "../img/category/category2.png", category: "Livingroom" },
];

export const products = [
  { id: 1, img: "/public/img/product/Product-1.jpg", name: "SOFA", price: "65.00" },
  { id: 1, img: "/public/img/product/product-2.jpg", name: "LAMP", price: "65.00" },

  { id: 1, img: "/public/img/product/product1.jpg", name: "BEDROOM", price: "65.00" },
  { id: 2, img: "/public/img/product/product2.jpg", name: "OFFICE", price: "65.00" },
  { id: 3, img: "/public/img/product/product3.jpg", name: "LIGHTING", price: "65.00" },
  { id: 4, img: "/public/img/product/product4.jpg", name: "BATHROOM", price: "65.00" },
  { id: 5, img: "/public/img/product/product5.jpg", name: "KITCHEN", price: "65.00" },
  { id: 6, img: "/public/img/product/product6.jpg", name: "INTERIOR", price: "65.00" },
  { id: 7, img: "/public/img/product/product7.jpg", name: "LIVING ROOM", price: "65.00" },
  { id: 8, img: "/public/img/product/product8.jpg", name: "DECOR", price: "65.00" },
  { id: 9, img: "/public/img/product/product9.jpg", name: "LIVING ROOM", price: "65.00" },
  { id: 10, img: "/public/img/product/product10.jpg", name: "SOFA", price: "65.00" },
  { id: 11, img: "/public/img/product/product11.jpg", name: "LIVING ROOM", price: "65.00" },
  { id: 13, img: "/public/img/product/product12.jpg", name: "SOFA", price: "65.00" },
];

export const brand = [
  { brand: "../img/brand/br1.png" },
  { brand: "../img/brand/br2.png" },
  { brand: "../img/brand/br3.png" },
  { brand: "../img/brand/br4.png" },
  { brand: "../img/brand/br5.png" },
  { brand: "../img/brand/br6.png" },
];

export const footer = [
  {
    id: 1,
    header: "Shop",
    title: [
      { subtitle: "New Arrivals" },
      { subtitle: "Sales & Special Offers" },
      { subtitle: "Living Room" },
      { subtitle: "Furniture Decor" },
      { subtitle: "Lamp & Lighting" },
      { subtitle: "Sofa & Chair" },
      { subtitle: "Home & Kitchen" },
    ],
  },
  {
    id: 2,
    header: "Information",
    title: [
      { subtitle: "About Us" },
      { subtitle: "Customer Services" },
      { subtitle: "Blog" },
      { subtitle: "Page 404" },
      { subtitle: "Sizing Guide" },
      { subtitle: "FAQs" },
      { subtitle: "Contact Us" },
    ],
  },
  {
    id: 3,
    header: "Order",
    title: [
      { subtitle: "My Account" },
      { subtitle: "View Bag" },
      { subtitle: "Privacy Policy" },
      { subtitle: "Cookie Policy" },
    ],
  },
];
