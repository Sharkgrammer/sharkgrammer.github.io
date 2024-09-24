/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyan: 'rgb(0, 204, 204)',
            },
            animation: {
                'slide-up-op': 'slide-up-op 500ms',
                'slide-up': 'slide-up 500ms',
                'slide-down': 'slide-down 500ms',
                'load-in' : 'slide-up 2000ms',
            },
            keyframes: {
                'slide-up-op': {
                    '0%': {opacity: 0, transform: 'translateY(100%)'},
                    '100%': {opacity: 0.8, transform: 'translateY(0%)'},
                },
                'slide-up': {
                    '0%': {opacity: 1, transform: 'translateY(100%)'},
                    '100%': {opacity: 1, transform: 'translateY(0%)'},
                },
                'slide-down': {
                    '0%': {opacity: 1, transform: 'translateY(-100%)'},
                    '100%': {opacity: 1, transform: 'translateY(0%)'},
                },
            },
        },
    },
    plugins: [],
}

