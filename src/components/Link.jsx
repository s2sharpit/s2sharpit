export default ({ data }) => {
    return (
            <a className={"liLink flex items-center capitalize transition-all after:blockafter:scale-x-100after:text-white " + (data.url ? "px-4 h-10 border-red-900 border-2 rounded-lg duration-300 hover:text-black hover:bg-white hover:border-white" : "flex-col hover:text-white") }
                    href={data.url ? (data.url) : ("#" + data.title) } target={ data.url && "_blank" } >
                { data.title }
                {data.title != "resume" && <span className="spLink h-0.5 wfull transition-all duration-300 bg-white"></span>}
            </a>
    )
}