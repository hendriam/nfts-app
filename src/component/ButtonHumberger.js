import React from "react";

export default function ButtonHumberger() {
    return (
        <button
            type="button"
            className="text-slate-500 w-8 h-8 sm:hidden flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </button>
    );
}
