import { MdOutlineTextSnippet, MdOutlineHome, MdOutlinePerson, MdOutlineImage, MdOutlineSend, MdOutlineAutoAwesomeMosaic } from 'react-icons/md';

const navData = [
  {
    name: "home",
    icon: <MdOutlineHome />,
  },
  {
    name: "about",
    icon: <MdOutlinePerson />,
  },
  {
    name: "skills",
    icon: <MdOutlineTextSnippet />,
  },
  {
    name: "portfolio",
    icon: <MdOutlineAutoAwesomeMosaic />,
  },
  {
    name: "projects",
    icon: <MdOutlineImage />,
  },
  {
    name: "contact",
    icon: <MdOutlineSend />,
  },
];

export default navData;