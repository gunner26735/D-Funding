export default function AddNewOrg() {
    return (
        <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
            <div className="p-6 bg-sky-100 rounded">
                <div className="flex items-center justify-center font-black m-3 mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-red-600 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    <h1 className="tracking-wide text-3xl text-gray-900">Add New Organization</h1>
                </div>
                <form id="login_form" action="api_login" method="POST" className="flex flex-col justify-center">
                    
                    <label className="text-sm font-medium">Org Name / Fund Title</label>
                    <input className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="Save Ocean..." />
                        <label className="text-sm font-medium">Description</label>
                        <textarea className="
                                mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" name="messages" placeholder="Write something"></textarea>
                        <label className="text-sm font-medium">Fund Goal</label>
                        <input className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                focus:outline-none
                                focus:border-sky-500
                                focus:ring-1
                                focus:ring-sky-500
                                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="1000" />
                        <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300" type="submit">
                            <span id="login_process_state" className="hidden">Sending</span>
                            <span id="login_default_state">Submit<span id="subtotal"></span></span>
                        </button>
                </form>
            </div>
        </section>
    );
}