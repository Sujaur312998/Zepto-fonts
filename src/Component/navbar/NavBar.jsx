import { Link } from "react-router-dom";

const navData = [
    {
        href: '/',
        title: "Upload Fonts"
    },
    {
        href: '/create_group',
        title: "Create Group"
    },
    {
        href: '/font_groups',
        title: "Font Groups"
    },
];

const NavBar = () => {
    return (
        <nav className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 h-20 shadow-lg">
            <ul className="flex items-center justify-center text-white text-lg font-semibold gap-8 h-full">
                {navData.map((item, index) => (
                    <Link to={item.href} key={index}>
                        <li className="hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>

    );
};

export default NavBar;
