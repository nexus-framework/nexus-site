import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const nexusTheme: CustomThemeConfig = {
  name: 'nexus',
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #4d99b6 
    "--color-primary-50": "228 240 244", // #e4f0f4
    "--color-primary-100": "219 235 240", // #dbebf0
    "--color-primary-200": "211 230 237", // #d3e6ed
    "--color-primary-300": "184 214 226", // #b8d6e2
    "--color-primary-400": "130 184 204", // #82b8cc
    "--color-primary-500": "77 153 182", // #4d99b6
    "--color-primary-600": "69 138 164", // #458aa4
    "--color-primary-700": "58 115 137", // #3a7389
    "--color-primary-800": "46 92 109", // #2e5c6d
    "--color-primary-900": "38 75 89", // #264b59
    // secondary | #91cbd7 
    "--color-secondary-50": "239 247 249", // #eff7f9
    "--color-secondary-100": "233 245 247", // #e9f5f7
    "--color-secondary-200": "228 242 245", // #e4f2f5
    "--color-secondary-300": "211 234 239", // #d3eaef
    "--color-secondary-400": "178 219 227", // #b2dbe3
    "--color-secondary-500": "145 203 215", // #91cbd7
    "--color-secondary-600": "131 183 194", // #83b7c2
    "--color-secondary-700": "109 152 161", // #6d98a1
    "--color-secondary-800": "87 122 129", // #577a81
    "--color-secondary-900": "71 99 105", // #476369
    // tertiary | #4e9bb9 
    "--color-tertiary-50": "228 240 245", // #e4f0f5
    "--color-tertiary-100": "220 235 241", // #dcebf1
    "--color-tertiary-200": "211 230 238", // #d3e6ee
    "--color-tertiary-300": "184 215 227", // #b8d7e3
    "--color-tertiary-400": "131 185 206", // #83b9ce
    "--color-tertiary-500": "78 155 185", // #4e9bb9
    "--color-tertiary-600": "70 140 167", // #468ca7
    "--color-tertiary-700": "59 116 139", // #3b748b
    "--color-tertiary-800": "47 93 111", // #2f5d6f
    "--color-tertiary-900": "38 76 91", // #264c5b
    // success | #b2fba5 
    "--color-success-50": "243 254 242", // #f3fef2
    "--color-success-100": "240 254 237", // #f0feed
    "--color-success-200": "236 254 233", // #ecfee9
    "--color-success-300": "224 253 219", // #e0fddb
    "--color-success-400": "201 252 192", // #c9fcc0
    "--color-success-500": "178 251 165", // #b2fba5
    "--color-success-600": "160 226 149", // #a0e295
    "--color-success-700": "134 188 124", // #86bc7c
    "--color-success-800": "107 151 99", // #6b9763
    "--color-success-900": "87 123 81", // #577b51
    // warning | #ffd086 
    "--color-warning-50": "255 248 237", // #fff8ed
    "--color-warning-100": "255 246 231", // #fff6e7
    "--color-warning-200": "255 243 225", // #fff3e1
    "--color-warning-300": "255 236 207", // #ffeccf
    "--color-warning-400": "255 222 170", // #ffdeaa
    "--color-warning-500": "255 208 134", // #ffd086
    "--color-warning-600": "230 187 121", // #e6bb79
    "--color-warning-700": "191 156 101", // #bf9c65
    "--color-warning-800": "153 125 80", // #997d50
    "--color-warning-900": "125 102 66", // #7d6642
    // error | #ed6571 
    "--color-error-50": "252 232 234", // #fce8ea
    "--color-error-100": "251 224 227", // #fbe0e3
    "--color-error-200": "251 217 220", // #fbd9dc
    "--color-error-300": "248 193 198", // #f8c1c6
    "--color-error-400": "242 147 156", // #f2939c
    "--color-error-500": "237 101 113", // #ed6571
    "--color-error-600": "213 91 102", // #d55b66
    "--color-error-700": "178 76 85", // #b24c55
    "--color-error-800": "142 61 68", // #8e3d44
    "--color-error-900": "116 49 55", // #743137
    // surface | #655f7a 
    "--color-surface-50": "232 231 235", // #e8e7eb
    "--color-surface-100": "224 223 228", // #e0dfe4
    "--color-surface-200": "217 215 222", // #d9d7de
    "--color-surface-300": "193 191 202", // #c1bfca
    "--color-surface-400": "147 143 162", // #938fa2
    "--color-surface-500": "101 95 122", // #655f7a
    "--color-surface-600": "91 86 110", // #5b566e
    "--color-surface-700": "76 71 92", // #4c475c
    "--color-surface-800": "61 57 73", // #3d3949
    "--color-surface-900": "49 47 60", // #312f3c
  }
}