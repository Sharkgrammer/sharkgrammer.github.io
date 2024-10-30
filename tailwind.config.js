/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // COLOURS FOR PERSONAL - IDE BASED
                '1-background': '#2d2d30',
                '1-pane-background': '#1e1e1e',
                '1-pane-background-light': '#262626',
                '1-text-dim': '#626269',
                '1-blue': '#9cdcfe',
                '1-orange': '#ce9178',
                '1-orange-dark': '#B06F56',
                '1-yellow': '#bdba34',

                // COLOURS FOR WATCH - POWERPOINT BASED
                '2-background': '#e6e6e6',
                '2-pane-background': '#f3f2f1',
                '2-primary': '#ba3f28',
                '2-shadow': '#d6d6d6',
                '2-text-dim': '#4d4b49',

                // COLOURS FOR PROJECTS - EXCEL BASED
                '3-background': '#e6e6e6',
                '3-pane-background': '#f3f2f1',
                '3-primary': '#007337',
                '3-shadow': '#d6d6d6',
                '3-shadow-dark': '#c0c0c0',
                '3-text-dim': '#4d4b49',

                // COLOURS FOR VIDEOS - PREMIERE PRO BASED
                '4-background': '#232323',
                '4-pane-background': '#1d1d1d',
                '4-pane-background-light': '#262626',
                '4-blue': '#2b87cf',
                '4-blue-light': '#729acc',
                '4-purple': '#a690e0',
                '4-yellow': '#f0f000',
                '4-shadow': '#161616',
                '4-shadow-light': '#303030',
                '4-text-dim': '#7d7d7d',

                // COLOURS FOR REPOS - GMAIL BASED
                '5-background': '#1e1e1e',
                '5-pane-background': '#141414',
                '5-pane-background-light': '#292a2b',
                '5-shadow': '#2f2f2f',
                '5-text-light': '#a9a9aa'
            },
            padding: {
                '15': '60px',
            },
            maxHeight: {
                '5/6': '83.333333%',
            },
            maxWidth: {
                'powerPane': '30%',
                '1/3': '33.333333%',
                '4/5': '80%',
                '5/6': '83.333333%',
            },
            animation: {
                'slide-up-2': 'slide-up 500ms',
                'slide-out-2': 'slide-out 1000ms',
                'slide-in-2': 'slide-in 500ms',
                'slide-down-2': 'slide-down 1000ms',
            },
            keyframes: {
                'slide-up': {
                    '0%': {opacity: 0, transform: 'translateY(100%)'},
                    '100%': {opacity: 1, transform: 'translateY(0%)'},
                },
                'slide-out': {
                    '0%': {opacity: 1, transform: 'translateX(0%)'},
                    '50%': {opacity: 0, transform: 'translateX(100%)'},
                    '100%': {opacity: 0, transform: 'translateX(100%)'},
                },
                'slide-in': {
                    '0%': {opacity: 0, transform: 'translateX(100%)'},
                    '100%': {opacity: 1, transform: 'translateX(0%)'},
                },
                'slide-down': {
                    '0%': {opacity: 1, transform: 'translateY(0%)'},
                    '50%': {opacity: 0, transform: 'translateY(100%)'},
                    '100%': {opacity: 0, transform: 'translateY(100%)'},
                },
                'slide-change': {
                    '0%': {opacity: 1, transform: 'translateX(0%)'},
                    '48%': {opacity: 0, transform: 'translateX(100%)'},
                    '52%': {opacity: 0, transform: 'translateY(100%)'},
                    '100%': {opacity: 1, transform: 'translateY(0%)'},
                },
            },
        },
    },
    plugins: [],
}

