/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'VerydarkDesaturatedBlueMbg': 'hsl(222, 26%, 31%)',
        'VerydarkDesaturatedBlue-TKbg': 'hsl(223, 31%, 20%)',
        'VerydarkDesaturatedBlueSbg': 'hsl(224, 36%, 15%)',
        'DesaturatedDarkBlueKeybg': 'hsl(225, 21%, 49%)',
        'DesaturateddarkBlue-keyshadow': 'hsl(224, 28%, 35%)',
        'Red-keybackgroundToggle': 'hsl(6, 63%, 50%)',
        'Darkred-keyshadow': 'hsl(6, 70%, 34%)',
        'LightgrayishOrange-keybg': 'hsl(30, 25%, 89%)',
        'GrayishOrange-keyshadow': 'hsl(28, 16%, 65%)',
        'VeryDarkGrayishBlue': 'hsl(221, 14%, 31%)',
        'LightGrayMbg': 'hsl(0, 0%, 90%)',
        'GrayishRedTKbg': 'hsl(0, 5%, 81%)',
        'VeryLightGraySbg': 'hsl(0, 0%, 93%)',
        'DarkModerateCyanKeyBg': 'hsl(185, 42%, 37%)',
        'VeryDarkCyanKeyShadow': 'hsl(185, 58%, 25%)',
        'OrangeKeyBgT': 'hsl(25, 98%, 40%)',
        'DarkOrangeKeyShadow': 'hsl(25, 99%, 27%)',
        'LightGrayishYellowKeyBG': 'hsl(45, 7%, 89%)',
        'DarkGrayishOrangeKeyShadow': 'hsl(35, 11%, 61%)',
        'VeryDarkGrayishYellow': 'hsl(60, 10%, 19%)',
        'White': 'hsl(0, 0%, 100%)',
        'VeryDarkVioletMainBG': 'hsl(268, 75%, 9%)',
        'VeryDarkVioletTKSbg': 'hsl(268, 71%, 12%)',
        'DarkvioletKeyBG': 'hsl(281, 89%, 26%)',
        'VividMagentaKeyShadow': 'hsl(285, 91%, 52%)',
        'PurecyanKeyBGToggle': 'hsl(176, 100%, 44%)',
        'SoftCyankeyshadow': 'hsl(177, 92%, 70%)',
        'VeryDarkVioletKeyBG': 'hsl(268, 47%, 21%)',
        'DarkMagentaKeyShadow': 'hsl(290, 70%, 36%)',
        'LightYellow': 'hsl(52, 100%, 62%)',
        'VeryDarkBlue': 'hsl(198, 20%, 13%)',
      },
    },
  },
  plugins: [],
}