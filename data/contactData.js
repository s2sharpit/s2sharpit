import { ForwardToInbox, LinkedIn, Twitter } from "@mui/icons-material";

const contactData = [
    {
        title: "Email",
        desc: "s2sharpit@gmail.com",
        url: "mailto:s2sharpit@gmail.com",
        icon: <ForwardToInbox className="text-title-color mb-1" />,
    },
    {
        title: "LinkedIn",
        desc: "s2sharpit",
        url: "https://www.linkedin.com/in/s2sharpit/",
        icon: <LinkedIn className="text-title-color mb-1" />,
    },
    {
        title: "Twitter",
        desc: "@s2sharpit",
        url: "https://twitter.com/s2sharpit",
        icon: <Twitter className="text-title-color mb-1" />,
    },
];

export default contactData;