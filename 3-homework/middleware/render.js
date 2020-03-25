/**
 * General render function
 */

const requireOption = (objectRepository, propertyName) => {
  if (objectRepository && objectRepository[propertyName]) {
    return objectRepository[propertyName]
  }
  throw new TypeError(propertyName + ' required')
}

module.exports = (objectrepository, viewName) => {
  return (req, res) => {
    console.log('render: ' + viewName)
    res.end('Template: ' + viewName)
  }
}
