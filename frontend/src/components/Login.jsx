export default function Login() {
    return <>
        <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
            <div className="w-40 h-auto">
                <h1 className="text-4xl font-bold mb-4">Login</h1>
                <form className="">
                    <input type="text" placeholder="Username" className="w-full mb-2 p-2 border border-gray-300 rounded"/>
                </form>
            </div>
        </div>
    </>
}