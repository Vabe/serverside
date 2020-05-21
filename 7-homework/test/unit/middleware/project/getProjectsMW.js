var expect = require('chai').expect;
var getProjectsMW = require('../../../../middleware/project/getProjectsMW');

describe('getProjects middleware ', () => {
  it('should return all projects', (done) => {
    const mw = getProjectsMW({
      ProjectModel: {
        find: (cb) => {
          cb(null, ['mockProject', 'mockProject2']);
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      
    },
    resMock, //res
      (err) => { // next
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).not.to.be.eql(undefined);
        expect(resMock.locals.projects.length).to.be.eql(2);
        done();
    });
  });

  it('should call next when there is a problem', (done) => {
    const mw = getProjectsMW({
      ProjectModel: {
        find: (cb) => {
          cb('error', '');
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      
    },
    resMock, //res
      (err) => { // next
        expect(err).to.be.eql('error');
        expect(resMock.locals).to.be.an('object').that.is.empty;
        done();
    });
  });
});