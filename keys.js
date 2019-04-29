const keyWidth1 = 1.26
const keyWidth2 = 1.55
const keyWidth3 = 1.81
const keyWidth4 = 2.07
const keyWidth5 = 2.34
const keyWidth6 = 2.36
const keyWidth7 = 2.63
const keyWidth8 = 6.65

const keys = [
  [
    { name: 'esc' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '0' },
    { name: '-' },
    { name: '=' },
    { name: 'delete', width: keyWidth4 }
  ],
  [
    { name: 'tab', width: keyWidth2 },
    { name: 'q' },
    { name: 'w' },
    { name: 'e' },
    { name: 'r' },
    { name: 't' },
    { name: 'y' },
    { name: 'u' },
    { name: 'i' },
    { name: 'o' },
    { name: 'e' },
    { name: '[' },
    { name: ']' },
    { name: '\\', width: keyWidth2 }
  ],
  [
    { name: 'caps', width: keyWidth3 },
    { name: 'a' },
    { name: 's' },
    { name: 'd' },
    { name: 'f' },
    { name: 'g' },
    { name: 'h' },
    { name: 'j' },
    { name: 'k' },
    { name: 'l' },
    { name: ';' },
    { name: '\'' },
    { name: 'enter', width: keyWidth6 }
  ],
  [
    { name: 'shift', width: keyWidth5 },
    { name: 'z' },
    { name: 'x' },
    { name: 'c' },
    { name: 'v' },
    { name: 'b' },
    { name: 'n' },
    { name: 'm' },
    { name: ',' },
    { name: '.' },
    { name: '/' },
    { name: 'shift', width: keyWidth7 }
  ],
  [
    { name: 'ctrl', width: keyWidth1 },
    { name: '◇', width: keyWidth1 },
    { name: 'alt', width: keyWidth1 },
    { name: 'space', width: keyWidth8 },
    { name: 'alt', width: keyWidth1 },
    { name: 'fn', width: keyWidth1 },
    { name: 'pn', width: keyWidth1 },
    { name: 'ctrl', width: keyWidth1 }
  ]
]

export default keys
