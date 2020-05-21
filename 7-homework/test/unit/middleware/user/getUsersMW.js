var expect = require('chai').expect;
var getUsersMW = require('../../../../middleware/user/getUsersMW');

describe('getUsers middleware ', () => {
  it('should return all users', (done) => {
    const mw = getUsersMW({
      UserModel: {
        find: (cb) => {
          cb(null, ['mockUser', 'mockUser2']);
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
        expect(resMock.locals.users.length).to.be.eql(2);
        done();
    });
  });

  it('should call next when there is a problem', (done) => {
    const mw = getUsersMW({
      UserModel: {
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