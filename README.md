# user-friendly-date-formatter
Display the date and time in a simple, user-friendly way.

## Usage
Install the package...
```shell
$ npm i user-friendly-date-formatter
```
...then...
```js
const df = require('user-friendly-date-formatter'); // or import df from 'user-friendly-date-formatter'

const userFriendlyDate = df(new Date(1559066423330), 'df-month-abbr df-date, df-full-year at df-hour:df-minutes df-suffix');
console.log(userFriendlyDate);
// -> May 28, 2019 at 1:00 pm
```

# API
#### Year
- `df-full-year`
- `df-2-digit-year`

#### Month
- `df-full-month`
- `df-month-abbr`
- `df-2-digit-month`
- `df-month-number`

#### Date
- `df-date`
- `df-2-digit-date`

#### Day
- `df-day`
- `df-day-abbr`
- `df-day-short`

#### Hour
- `df-military-hour`
- `df-hour`

#### Minute
- `df-minutes`

#### Second
- `df-seconds`

#### Milisecond
- `df-milliseconds`
- `df-time`

#### Suffix
- `df-suffix`


Hope this package helps you!

Found a bug?  [Open an issue](https://github.com/Vehmloewff/user-friendly-date-formatter/issues/new) or ping me on Discord: Vehmloewff#0714.