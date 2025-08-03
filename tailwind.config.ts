/** @type {import('tailwindcss').Config} */
export default {
    content: ['./app/root.tsx', './app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                monts: ['Montserrat', 'sans-serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
            },
            colors: {
                'acm-blue': '#0085ca',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideInTop: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideInBottom: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0.8)', opacity: '0' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': {
                        transform: 'translateX(-5px)',
                    },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
                },
                flash: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                flipX: {
                    '0%': { transform: 'rotateX(0deg)' },
                    '100%': { transform: 'rotateX(180deg)' },
                },
                typing: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
                blink: {
                    '50%': { borderColor: 'transparent' },
                },
                scalePulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-out': 'fadeOut 0.8s ease-in forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'slide-in-top': 'slideInTop 0.6s ease-out forwards',
                'slide-in-bottom': 'slideInBottom 0.6s ease-out forwards',
                'zoom-in': 'zoomIn 0.5s ease-out forwards',
                'zoom-out': 'zoomOut 0.5s ease-in forwards',
                wiggle: 'wiggle 0.5s ease-in-out infinite',
                shake: 'shake 0.5s ease-in-out',
                flash: 'flash 1s linear infinite',
                'flip-x': 'flipX 0.8s ease-in-out forwards',
                typing: 'typing 2s steps(20, end) forwards',
                blink: 'blink 0.7s step-end infinite',
                'scale-pulse': 'scalePulse 1s ease-in-out infinite',
            },
        },
    },
};
