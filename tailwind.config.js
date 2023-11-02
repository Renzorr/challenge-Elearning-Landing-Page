/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "clamp(40px,7cqw,56px)",
        lg: "clamp(24px,5cqw,32px)",
        md: "clamp(16px,4cqw,18px)"
      },
      colors: {
        "dark-blue": "#13183F",
        'dark-pink': '#F74780',
        gray: "#83869A",
      },
      container: {
        center: true,
        padding: 20,
        screens: {
          xl: "1150px",
        },
      },
      screens: {
        desktop: { max: "1050px" },
      },
      backgroundImage: {
        "bg-course-gradient": "linear-gradient(180deg,#FFFFFF 0%,#F0F1FF 100%)",
        "bg-card-gradient": "linear-gradient(180deg,#FF6F48 .04%,#F02AA6 100%)",
        "button-gradient": "linear-gradient(180deg,#FF6F48 .04%,#F02AA6 100%)",
        "button-gradient-2": "linear-gradient(180deg,#4851FF -54.32%,#F02AA6 100%)"
      },
      gridTemplateColumns:{
        "responsive": "repeat(auto-fit, minmax(300px, 1fr))"
      }
    },
  },
  plugins: [],
};
