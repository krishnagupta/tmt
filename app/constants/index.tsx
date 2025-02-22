import {
  facebook,
  instagram,
  shieldTick,
  support,
  build,
  twitter,
  train,
  placement,
} from "../../public/icons";

export const navLinks = [
  {href: "#home", label: "Home"},
  {href: "#about-us", label: "About Us"},
  {href: "#products", label: "Products"},
  {href: "#contact-us", label: "Contact Us"},
];

export const statistics = [
  {value: "5+", label: "Brands"},
  {value: "500+", label: "Trained Customers"},
  {value: "1k+", label: "Placed"},
];

export const services = [
  {
    imgURL: build,
    label: "Building",
    subtext: "Enjoy seamless product built from professional developer.",
  },
  {
    imgURL: train,
    label: "Training",
    subtext: "Transform your career by joining out training program.",
  },
  {
    imgURL: placement,
    label: "Placement",
    subtext: "Our dedicated team is here to assist you in cracking interview.",
  },
];

// export const reviews = [
//   {
//     imgURL: customer1,
//     customerName: "Morich Brown",
//     rating: 4.5,
//     feedback:
//       "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
//   },
//   {
//     imgURL: customer2,
//     customerName: "Lota Mongeskar",
//     rating: 4.5,
//     feedback:
//       "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
//   },
// ];

export const footerLinks = [
  {
    title: "Products",
    links: [
      {name: "product 1", link: "/"},
      {name: "product 2", link: "/"},
    ],
  },
  {
    title: "Help",
    links: [
      {name: "About us", link: "/"},
      {name: "FAQs", link: "/"},
      {name: "How it works", link: "/"},
      {name: "Privacy policy", link: "/"},
      {name: "Payment policy", link: "/"},
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "krishna.ind.171@gmail.com",
        link: "mailto:krishna.ind.171@gmail.com",
      },
      {name: "+917022882595", link: "tel:+917022882595"},
    ],
  },
];

export const socialMedia = [
  {src: facebook, alt: "facebook logo"},
  {src: twitter, alt: "twitter logo"},
  {src: instagram, alt: "instagram logo"},
];
