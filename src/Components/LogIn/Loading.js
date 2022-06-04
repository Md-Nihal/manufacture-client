import React from 'react';

const Loading = () => {
    return (
        <div class="flex items-center justify-center space-x-2">
            <div class="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full" role="status">
                <span class="visually-hidden">it's Loading...</span>
            </div>
            <div class="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0" role="status">
                <span class="visually-hidden">it's Loading...</span>
            </div>
        </div>
    );
};

export default Loading;