import React from 'react';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Welcome to the Home Page!</h1>
            <p className="text-lg mb-4">
                This is your home page content. You can customize and add more sections as needed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Example section */}
                <div className="bg-gray-200 p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Section 1</h2>
                    <p className="text-gray-500">Some content for section 1.</p>
                </div>

                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default HomePage;