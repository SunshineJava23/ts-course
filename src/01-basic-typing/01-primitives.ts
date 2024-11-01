// numbers
let x = 120
let y = 10.5
// let z  = 1234n // BigInt
let z = NaN

// string
let str1 = 'Hello TypeScript!!!'

let str2: string
// ...
str2 = 'Hello World!!!'

let symb = Symbol('as')

// boolean
let o = true
o = false

// nothing
let n: undefined = undefined
let m: null = null

// literal
const num = 150
const str3 = 'str'

//univeral
let d: any = 200
d = 'str'
d = []

let f: unknown = 1
// f.toUpperCase() // Error
if (typeof f === 'string') f.toUpperCase()
