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
                '1-yellow': '#bdba34',

                // COLOURS FOR WATCH - POWERPOINT BASED
                '2-background': '#e6e6e6',
                '2-pane-background': '#f3f2f1',
                '2-primary': '#ba3f28',
                '2-shadow': '#d6d6d6',
                '2-text-dim': '#4d4b49'
            },
            maxHeight: {
                '5/6': '83.333333%',
            },
            maxWidth: {
                'powerPane': '30%',
                '5/6': '83.333333%',
            },
            animation: {
                'slide-up-2': 'slide-up 500ms',
                'slide-out-2': 'slide-out 1000ms',
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

