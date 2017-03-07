'use strict'

const fs = require('fs')

class Employee {
  constructor (n, t, s) {
    this.name = n
    this.title = t
    this.salary = s
  }

  // TODO ???
  static parseFromFilePath (path) {
    // const data = JSON.parse(fs.readFileSync(path, 'utf8'))
    // return new Employee(data.name, data.title, data.salary)
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        err ? reject(err) : resolve(new Employee(JSON.parse(data).name,JSON.parse(data).title, JSON.parse(data).salary))
      })
    })
  }

  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}

// TODO ???

module.exports = {
  Employee
}
