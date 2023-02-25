const { TextSnippetOutlined, HomeOutlined, PersonOutlined, BusinessCenterOutlined, ImageOutlined, SendOutlined } = require("@mui/icons-material");

const navData = [
    {
        name: "home",
        icon: <HomeOutlined fontSize="small" />,
    },
    {
        name: "about",
        icon: <PersonOutlined fontSize="small" />,
    },
    {
        name: "skills",
        icon: <TextSnippetOutlined fontSize="small" />,
    },
    {
        name: "services",
        icon: <BusinessCenterOutlined fontSize="small" />,
    },
    {
        name: "portfolio",
        icon: <ImageOutlined fontSize="small" />,
    },
    {
        name: "contact",
        icon: <SendOutlined fontSize="small" />,
    },
]

export default navData;