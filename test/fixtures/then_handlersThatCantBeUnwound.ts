export const input = `
function foo() {
  return bar.then(baz => {
    switch (baz) {
      case 2: return
    }
    console.log('test')
  }).then(String)
}
function bar() {
  return a.then(b => {
    for (const i of [1, 2, 3]) {
      return
    }
    console.log('test')
  }).then(String)
}
function qux() {
  return a.then(b => {
    while (i) {
      return
    }
    console.log('test')
  }).then(String)
}
function baz() {
  return a.then(b => {
    if (a) {
      if (b) {
        return
      }
    }
    console.log('test')
  }).then(String)
}
`

export const options = {}

export const expected = `
async function foo() {
  return String(
    await bar.then(async baz => {
      switch (baz) {
        case 2: return
      }
      console.log('test')
    })
  )
}
async function bar() {
  return String(
    await a.then(async b => {
      for (const i of [1, 2, 3]) {
        return
      }
      console.log('test')
    })
  )
}
async function qux() {
  return String(
    await a.then(async b => {
      while (i) {
        return
      }
      console.log('test')
    })
  )
}
async function baz() {
  return String(
    await a.then(async b => {
      if (a) {
        if (b) {
          return
        }
      }
      console.log('test')
    })
  )
}
`
