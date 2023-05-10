import { MdOutlineTextSnippet, MdOutlineHome, MdOutlinePerson, MdOutlineBusinessCenter, MdOutlineImage, MdOutlineSend } from 'react-icons/md';

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
    name: "services",
    icon: <MdOutlineBusinessCenter />,
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