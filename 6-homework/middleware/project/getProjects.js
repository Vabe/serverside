/**
 * Get all the projects
 * @returns projects[]
 */
var moment = require('moment');

module.exports = (objrep) => {
  return (req, res, next) => {
    setTimeout(function () {
      res.locals.projects = [
        {
          'id': 1,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 2,
          'title': 'Card title',
          'desc': 'This card has supporting text below as a natural lead-in to additional content.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 3,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 4,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 5,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 6,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 7,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          'updated': moment().startOf('hour').fromNow()
        },
        {
          'id': 8,
          'title': 'Card title',
          'desc': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          'updated': moment().startOf('hour').fromNow()
        }
      ]
      return next()
    }, 350)
  }
}
