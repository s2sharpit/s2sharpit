export default () => {
    return (
        <section id="contact" className="snap-start absolutebottom-full h-screen p-20">
            <h1 className="text-center mt-5 mb-16 text-lg font-semibold"> <span className="text-4xl">Contact</span> <br />
                -----get in touch-----</h1>
            <div className="flex space-x-10 justify-between">
                <div className="my-10 space-y-5">
                    <div className=""><b>Name</b><br />Tushar Saini</div>
                    <div className=""><b>Address</b><br />Bhubaneswar, Odisha, India</div>
                    <div className=""><b>Email</b><br />s2sharpit@gmail.com</div>
                </div>
                <div className="">
                    <b className="text-2xl">Feedback</b>
                    <form action="#" className="mt-5">
                        <input type="text" placeholder="Name" className="rounded-md h-8 w-72 p-2 mr-6 bg-gray-600" />
                        <input type="text" placeholder="Email" className="rounded-md h-8 w-64 p-2 bg-gray-600" /><br />
                        <input type="text" placeholder="Subject" className="rounded-md h-8 w-full p-2 my-5 bg-gray-600" />
                        <textarea cols="30" rows="10" placeholder="Message..." className="rounded-md w-full h-24 p-2 bg-gray-600"></textarea>
                        <button className="px-9 py-2 mt-5 rounded-lg border-2 hover:text-black hover:bg-gray-300 font-bold transition-all text-lg duration-300" type="submit" name="send">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}