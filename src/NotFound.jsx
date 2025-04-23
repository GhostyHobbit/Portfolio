
function NotFound() {
    return (
        <div>
            <article className="w-[46vw] mx-auto p-4 border border-borderGreen rounded-lg shadow-md bg-bgBlack mb-6 text-center">
                <h1 className="text-5xl font-bold text-red-700 mb-2">404 Not Found</h1>
                <h2 className="text-2xl font-bold text-red-700 mt-6 mb-2 text-left">The page you tried to reach is not part of The Archives</h2>
            </article>
        </div>
    );
}

export default NotFound;