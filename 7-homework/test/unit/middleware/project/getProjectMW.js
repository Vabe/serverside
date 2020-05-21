var expect = require('chai').expect;
var getProjectMW = require('../../../../middleware/project/getProjectMW');

describe('getProject middleware ', () => {
  it('should return one project', (done) => {
    const mw = getProjectMW({
      ProjectModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: '1234' });
          cb(null, 'mockProject');
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      params: {
        projectid: '1234'
      }
    },
    resMock, //res
      (err) => { // next
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({ project: 'mockProject' });
        done();
    });
  });

  it('should call next when there is a problem', (done) => {
    const mw = getProjectMW({
      ProjectModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: '1234' });
          cb('error', null);
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      params: {
        projectid: '1234'
      }
    },
    resMock, //res
      (err) => { // next
        expect(err).not.to.be.eql(undefined);
        expect(err).to.be.eql('error');
        done();
    });
  });

  it('should call next when there is no such project', (done) => {
    const mw = getProjectMW({
      ProjectModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: '1234' });
          cb(null, '');
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      params: {
        projectid: '1234'
      }
    },
    resMock, //res
      (err) => { // next
        expect(err).not.to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({});
        done();
    });
  });
});