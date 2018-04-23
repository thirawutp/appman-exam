const _ = require('lodash')

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
  store = _.cloneDeep(store)
  // code here
  Object.keys(scores).forEach(scoreKey => {
    // check if no subject by name
    if (store.filter(item => item.subject === scoreKey).length === 0) {
      store.push({
        subject: scoreKey,
        students: []
      })
    }

    store.forEach(({ subject, students }, index) => {
      if (subject === scoreKey) {
        // check if no student
        if (students.filter(student => student.name === name).length === 0) {
          students.push({
            name
          })
        }

        // find student
        students.forEach((student, i) => {
          if (student.name === name) {
            store[index].students[i].score = scores[scoreKey]
          }
        })
      }
    })
  })
  return store
}

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
  // code here

  store = _.cloneDeep(store)
  store.forEach(item => {
    if (item.subject === subject) {
      item.students = item.students.filter(student => student.name !== name)
    }
  })
  return store
}

/**
 * @params {Object} store
 */
exports.transformData = store => {
  // code here
  const t = {}
  store = _.cloneDeep(store)

  store.forEach(({subject, students}) => {
    students.forEach(({ name, score }) => {
      if (!t[name]) {
        t[name] = {}
      }
      t[name][subject] = score
    })
  })
  return Object.keys(t).map(name => ({ name, ...t[name] }))
}
