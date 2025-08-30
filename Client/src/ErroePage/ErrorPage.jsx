import React from 'react'

function ErrorPage() {
    return (
        // The main container for the page, using a dark-aware background color.
        <main className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center h-screen font-['Inter',_sans-serif]">
            <div className="text-center p-8">
                {/* SVG Icon: A warning triangle to visually represent an error. */}
                <div className="inline-block mb-4 text-indigo-500 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>

                {/* Error Code: Large, bold text for the 404 status code. */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-gray-800 dark:text-gray-200 tracking-wider">
                    404
                </h1>

                {/* Main Message: A user-friendly title explaining the error. */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                    Oops! Page Not Found.
                </h2>

                {/* Sub Message: A more detailed explanation of what might have happened. */}
                <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
                    Sorry, the page you are looking for is under construction or dosen't exist.
                </p>

                {/* Home Button: A clear call-to-action link to navigate back to the homepage. */}
                <div className="mt-8">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                        style={{
                            fontWeight: 500,
                            color:'white',
                            textDecoration: 'inherit',
                            padding: '0.5rem',
                            margin: '0.5rem',
                        }}
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </main>
    );
}

export default ErrorPage