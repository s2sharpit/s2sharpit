/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xs: '400px',
            ...defaultTheme.screens
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-poppins)',
                    ...fontFamily.sans
                ]
  		},
  		boxShadow: {
  			profile: 'inset 0 0 0 6px rgb(255 255 255 / 30%)',
  			smProfile: 'inset 0 0 0 8px rgb(255 255 255 / 30%)',
  			header: '0 -1px 4px rgba(var(--border-color), 0.15)'
  		},
  		keyframes: {
  			profile: {
  				'0%, 100%': {
  					borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
  				},
  				'50%': {
  					borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
  				}
  			},
  			scroll: {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'30%': {
  					transform: 'translateY(3.75rem)'
  				}
  			},
  			wave: {
  				'0%': {
  					transform: 'rotate(0.0deg)'
  				},
  				'10%': {
  					transform: 'rotate(-10.0deg)'
  				},
  				'20%': {
  					transform: 'rotate(12.0deg)'
  				},
  				'30%': {
  					transform: 'rotate(-10.0deg)'
  				},
  				'40%': {
  					transform: 'rotate(9.0deg)'
  				},
  				'50%': {
  					transform: 'rotate(0.0deg)'
  				},
  				'100%': {
  					transform: 'rotate(0.0deg)'
  				}
  			}
  		},
  		animation: {
  			profile: 'profile 4s ease-in-out infinite',
  			wheel: 'scroll 2s ease infinite',
  			wave: 'wave 2s ease infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
