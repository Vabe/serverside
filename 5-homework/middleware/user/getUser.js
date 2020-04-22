/**
 * Get user
 * @returns user
 */

module.exports = (objrep) => {
  return (req, res, next) => {
    console.log('getUser - ')
    res.locals.user = {
      _id: '001',
      name: 'John Doe',
      email: 'john@doe.com',
      password: 'nemhashelem'
    }
    next()
  }
}
