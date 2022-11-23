export default ({ data }) => {
    return (
        <div
            className={"viewProject flex flex-col text-center justify-center w-full h-96 border-2 rounded-2xl border-gray-700 bg-cover bg-no-repeat bg-center " + (data.img)}>
            <div
                className="bg-gray-700 bg-opacity-70 h-full rounded-2xl p-5 m-2 opacity-0 transition-all duration-500">
                <h3 className="m-5 text-2xl font-bold">{ data.title }</h3>
                <p className="text-justify">{ data.para }</p>
            </div>
        </div>
    )
}