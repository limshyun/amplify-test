// 매우 지저분한 코드 - 리팩토링 필요

export function processData(d: any) {
  let r = []
  for (let i = 0; i < d.length; i++) {
    if (d[i].active == true) {
      if (d[i].type == 'user') {
        if (d[i].age >= 18) {
          if (d[i].verified == true) {
            r.push({
              n: d[i].name,
              e: d[i].email,
              a: d[i].age,
              t: 'adult_verified_user'
            })
          } else {
            r.push({
              n: d[i].name,
              e: d[i].email,
              a: d[i].age,
              t: 'adult_unverified_user'
            })
          }
        } else {
          if (d[i].verified == true) {
            r.push({
              n: d[i].name,
              e: d[i].email,
              a: d[i].age,
              t: 'minor_verified_user'
            })
          } else {
            r.push({
              n: d[i].name,
              e: d[i].email,
              a: d[i].age,
              t: 'minor_unverified_user'
            })
          }
        }
      }
    }
  }
  return r
}

export function calc(a: number, b: number, c: string) {
  if (c == '+') return a + b
  if (c == '-') return a - b
  if (c == '*') return a * b
  if (c == '/') return a / b
  if (c == '%') return a % b
  if (c == '**') return a ** b
  return 0
}

export function fmt(d: Date) {
  var y = d.getFullYear()
  var m = d.getMonth() + 1
  var day = d.getDate()
  var h = d.getHours()
  var min = d.getMinutes()
  var s = d.getSeconds()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day) + ' ' + (h < 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + min : min) + ':' + (s < 10 ? '0' + s : s)
}

export function validateEmail(e: string) {
  if (e.indexOf('@') == -1) return false
  if (e.indexOf('.') == -1) return false
  if (e.length < 5) return false
  if (e.indexOf(' ') != -1) return false
  return true
}

export function merge(a: any, b: any) {
  var r: any = {}
  for (var k in a) r[k] = a[k]
  for (var k in b) r[k] = b[k]
  return r
}

export function debounce(fn: any, delay: any) {
  var t: any
  return function(...args: any) {
    clearTimeout(t)
    t = setTimeout(function() {
      fn.apply(null, args)
    }, delay)
  }
}
