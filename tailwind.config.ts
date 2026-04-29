import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#090b10',
        panel: '#111722',
        cyanGlow: '#20e6ff',
        electric: '#247cff'
      },
      boxShadow: {
        glow: '0 0 32px rgba(32, 230, 255, 0.22)',
        'glow-strong': '0 0 44px rgba(36, 124, 255, 0.34)'
      },
      backgroundImage: {
        'radial-cyan': 'radial-gradient(circle at 50% 0%, rgba(32, 230, 255, 0.18), transparent 42%)'
      },
      keyframes: {
        gradientDrift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        softPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(32, 230, 255, 0.26)' },
          '50%': { transform: 'scale(1.035)', boxShadow: '0 0 0 14px rgba(32, 230, 255, 0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'gradient-drift': 'gradientDrift 18s ease-in-out infinite',
        'soft-pulse': 'softPulse 3.8s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        marquee: 'marquee 34s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
