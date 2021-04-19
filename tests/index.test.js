const D = require('../src/index')

const today = new Date()
const E = new D()
const exDate = new D(1998, 10, 3, 1, 1, 1)
const exDateYear = new D(2026, 1, 1, 1, 1, 1)
const exDateMonth = new D(2021, 10, 1, 1, 1, 1)
const exDateDay = new D(2021, 3, 1, 1, 1, 1)
const exDateYearPast = new D(2017, 1, 1, 1, 1, 1)
const exDateMonthPast = new D(2021, 1, 1, 1, 1, 1)
const exDateDayPast = new D(2021, 1, 1, 1, 1, 1)

test('E.year', () => {
  expect(E.year).toBe(today.getFullYear())
})

test('E.yr', () => {
  expect(E.yr).toBe(today.getFullYear() % 100)
})

test('E.month', () => {
  expect(E.month).toBe('April')
})

test('E.mon', () => {
  expect(E.mon).toBe('Apr')
})

test('exDate.day', () => {
  expect(exDate.day).toBe('Tuesday')
})

test('exDate.dy', () => {
  expect(exDate.dy).toBe('Tue')
})

test('E.date', () => {
  expect(E.date).toBe(today.getDate())
})

test('exDate.hours', () => {
  expect(E.hours).toBe(today.getHours())
})

test('E.hrs', () => {
  expect(E.hrs).toBe(today.getHours())
})

test('E.minutes', () => {
  expect(E.minutes).toBe(today.getMinutes())
  expect(exDateDay.minutes).toBe('01')
})

test('E.mins', () => {
  expect(E.mins).toBe(today.getMinutes())
})

test('E.seconds', () => {
  expect(E.seconds).toBe(today.getSeconds())
})

test('E.secs', () => {
  expect(E.secs).toBe(today.getSeconds())
})

test('E.format', () => {
  expect(exDate.format()).toBe('Tuesday, Nov 3, 1998')
})

test('exDate.format', () => {
  expect(exDate.format('Y,y / M,m / D,d / t / H,h / I,i / S,s')).toBe('1998,98 / November,Nov / Tuesday,Tue / 3 / 01,1 / 01,1 / 01,1')
})

test('exDate.when', () => {
  const now = new Date()
  now.setDate(now.getDate()+2)
  const twoDaysFromNow = new D(now)
  expect(twoDaysFromNow.when()).toBe('This is 2 day(s) from now')
  // expect(exDateYear.when()).toBe('This is 5 year(s) from now')
  // expect(exDateMonth.when()).toBe('This is 7 month(s) from now')
  // expect(exDateYearPast.when()).toBe('This was 5 year(s) ago')
  // expect(exDateMonthPast.when()).toBe('This was 1 month(s) ago')
  // expect(exDateDayPast.when()).toBe('This was 1 day(s) ago')
})
