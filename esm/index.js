const { months, mons, days, dys } = require('../src/utils');

/**
 * class D create a new date
 * @param {Year, Month, Day, Hours, Minutes, Seconds}
 * @param {Year} @returns the full year
 * @param {yr} @returns the last 2 digits of year
 * @param {month} @returns the full month name
 * @param {mon} @returns the first 3 letters of month name
 * @param {day} @returns the day of the week as full word
 * @param {dy} @returns the first 3 letters of the day word
 * @param {date} @returns the date in ##
 * @param {hours} @returns the hour of the date, padded with 0 if single digit
 * @param {hrs} @returns the hour of the date, unpadded
 * @param {minutes} @returns the minutes of the date, padded with 0 if single digit
 * @param {mins} @returns the minutes of the date, unpadded
 * @param {seconds} @returns the seconds of the date, padded with 0 if single digit
 * @param {secs} @returns the seconds of the date, unpadded
 */

class D {
  constructor (...args) {
    this._date = new Date(...args);
  }

  get year () {
    return this._date.getFullYear()
  }

  get yr () {
    if ((this._date.getFullYear() % 100) < 10) {
      return 0 + [this._date.getFullYear() % 100]
    } else {
      return this._date.getFullYear() % 100
    }
  }

  get month () {
    return months[this._date.getMonth()]
  }

  get mon () {
    return mons[this._date.getMonth()]
  }

  get day () {
    return days[this._date.getDay()]
  }

  get dy () {
    return dys[this._date.getDay()]
  }

  get date () {
    return this._date.getDate()
  }

  get hours () {
    if ([this._date.getHours()] < 10) {
      return 0 + [this._date.getHours()]
    } else {
      return this._date.getHours()
    }
  }

  get hrs () {
    return this._date.getHours()
  }

  get minutes () {
    if ([this._date.getMinutes()] < 10) {
      return 0 + [this._date.getMinutes()]
    } else {
      return this._date.getMinutes()
    }
  }

  get mins () {
    return this._date.getMinutes()
  }

  get seconds () {
    if ([this._date.getSeconds()] < 10) {
      return 0 + [this._date.getSeconds()]
    } else {
      return this._date.getSeconds()
    }
  }

  get secs () {
    return this._date.getSeconds()
  }

  /**
   * format function masks params for easier usage with the getter methods
   * @param {Y} gives the year in full '1998'
   * @param {y} gives the year in short '98'
   * @param {M} gives the month in full 'November'
   * @param {m} gives the month in short 'Nov'
   * @param {D} gives the day in full '03'
   * @param {d} gives the day in short '3'
   * @param {t} gives the date in short '3'
   * @param {H} gives the hour in full '01'
   * @param {h} gives the hour in short '1'
   * @param {I} gives the minute in full '01'
   * @param {i} gives the minute in short '1'
   * @param {S} gives the second in full '01'
   * @param {s} gives the second in short '1'
   */

  format (dateFormat = 'D, m t, Y') {
    const dateDict = {
      Y: this.year, // Year full ('1998')
      y: this.yr, // Year short ('98')
      M: this.month, // Month full ('November')
      m: this.mon, // Month short ('Nov')
      D: this.day, // Day full ('Tuesday')
      d: this.dy, // Day short ('Tue')
      t: this.date, // Date short
      H: this.hours, // Hours full ('01")
      h: this.hrs, // Hours short ('1')
      I: this.minutes, // Minutes full ('01')
      i: this.mins, // Minutes short ('1')
      S: this.seconds, // Seconds full ('01')
      s: this.secs //  Seconds short ('1')
    };

    let outputString = '';
    for (let i = 0; i < dateFormat.length; i++) {
      if (dateDict[dateFormat[i]] === undefined) {
        outputString += dateFormat[i];
      } else {
        outputString += dateDict[dateFormat[i]];
      }
    }

    return outputString
  }

  /**
   * when gives a description of when a date will occur
   * works for past or future dates
   * const exDateYear = new D(1998, 10, 3, 1, 1, 1)
   * exDateYear.when()
   */

  when () {
    const when = new D();
    const calcYear = this.year - when.year;
    const calcMonth = this._date.getMonth() - when._date.getMonth() + (calcYear * 12);
    const calcDay = this._date.getDay() - when._date.getDay();
    const calcHours = this._date.getHours() - when._date.getHours() + (calcDay * 24);

    if (calcMonth > 11) {
      return `This is ${calcYear} year(s) from now`
    } else if (calcMonth < -11) {
      return `This was ${Math.abs(calcYear)} year(s) ago`
    } else if (calcMonth > 0) {
      return `This is ${calcMonth} month(s) from now`
    } else if (calcMonth < 0) {
      return `This was ${Math.abs(calcMonth)} month(s) ago`
    } else if (calcHours > 23) {
      return `This is ${Math.abs(calcDay)} day(s) from now`
    } else if (calcHours < -23) {
      return `This was ${Math.abs(calcDay)} day(s) ago`
    } else {
      return 'Enter a date: (Year, Month, Day, Hour, Minutes, Seconds)'
    }
  }
}

// const a = new D()
// const b = a.format('') //Test here for date lib
// console.log(b)

// const c = a.format()
// console.log(c)

// const f = new D(2021, 1, 1, 1, 1, 1)
// console.log(f.when())

// const exDateYear = new D(2026, 1, 1, 1, 1, 1)
// const exDateMonth = new D(2021, 1, 1, 1, 1, 1)
// const exDateDay = new D(2021, 1, 1, 1, 1, 1)

// console.log(exDateYear.when())
// console.log(exDateMonth.when())
// console.log(exDateDay.when())

// const exDate = new D(1998, 10, 3, 1, 1, 1)
// console.log(exDate.format('Y,y / M,m / D,d / t / H,h / I,i / S,s'))

// const exDateDay = new D(2021, 1, 1, 1, 1, 1)
// console.log(exDateDay)

module.exports = D;
