const { TextSnippetOutlined, HomeOutlined, PersonOutlined, BusinessCenterOutlined, ImageOutlined, SendOutlined } = require("@mui/icons-material");

const navData = [
    {
        name: "home",
        icon: <HomeOutlined fontSize="small" className='block md:hidden' />,
    },
    {
        name: "about",
        icon: <PersonOutlined fontSize="small" className='block md:hidden' />,
    },
    {
        name: "skills",
        icon: <TextSnippetOutlined fontSize="small" className='block md:hidden' />,
    },
    {
        name: "services",
        icon: <BusinessCenterOutlined fontSize="small" className='block md:hidden' />,
    },
    {
        name: "projects",
        icon: <ImageOutlined fontSize="small" className='block md:hidden' />,
    },
    {
        name: "contact",
        icon: <SendOutlined fontSize="small" className='block md:hidden' />,
    },
]

export default navData;