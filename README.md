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

const userFriendlyDate = df(new Date(1159066423330), '%fM %D, %YYYY at %h:%m %a');
console.log(userFriendlyDate);
// -> Sep 23, 2006 at 9:53 pm
```

# API
#### Year
- `%YYYY`
- `%YY`

#### Month
- `%fMM`
- `%fM`
- `%MM`
- `%M`

#### Date
- `%DD`
- `%D`

#### Day
- `%ddd`
- `%dd`
- `%d`

#### Hour
- `%H`
- `%h`

#### Minute
- `%m`

#### Second
- `%s`

#### Millisecond
- `%l`
- `%t`

#### Suffix
- `%a`


Hope this package helps you!

Found a bug?  [Open an issue](https://github.com/Vehmloewff/user-friendly-date-formatter/issues/new) or ping me on Discord: Vehmloewff#0714.