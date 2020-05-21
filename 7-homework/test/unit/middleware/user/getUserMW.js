var expect = require('chai').expect;
var getUserMW = require('../../../../middleware/user/getUserMW');

describe('getUserMW middleware ', () => {
  it('should return one user', (done) => {
    const mw = getUserMW({
      UserModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: '1234' });
          cb(null, 'mockUser');
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      params: {
        userid: '1234'
      }
    },
    resMock, //res
      (err) => { // next
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({ user: 'mockUser' });
        done();
    });
  });

  it('should call next when there is a problem', (done) => {
    const mw = getUserMW({
      UserModel: {
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
        userid: '1234'
      }
    },
    resMock, //res
      (err) => { // next
        expect(err).not.to.be.eql(undefined);
        expect(err).to.be.eql('error');
        done();
    });
  });

  it('should call next when there is no such user', (done) => {
    const mw = getUserMW({
      UserModel: {
        findOne: (p1, cb) => {
          cb(null, '');
        }
      }
    });

    const resMock = {
      locals: {}
    }

    mw({ // req
      params: {
        userid: undefined
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