import navData from "../data/navData";
export default () => {
    return (
        <ul className="fixed w-3 top-1/2 right-0 -translate-y-1/2 space-y-4 z-10">
                {navData.map(data => (
                        !data.url && <a href={"#" + data.title} className="h-14 cursor-pointer block w-full bg-red500">
                                <i className="bg-gray-700 hover:bg-white h-full w-0.5 hover:w-1 block"></i></a>

                ))}
    </ul>
    )
}