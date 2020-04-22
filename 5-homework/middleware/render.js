/**
 * General render function
 */

module.exports = (objectrepository, viewName) => {
  return (req, res) => {
    console.log('render: ' + viewName)
    //res.end('Template: ' + viewName)
    res.render(viewName)
  }
}
