var expect = require('chai').expect;
var authMW = require('../../../../middleware/auth/authMW');

describe('auth middleware ', (done) => {
  it('should redirect to root', (done) => {
    const mw = authMW({
      
    });

    const req = {
      session: {
        loggedIn: false,
      }
    }

    const res = {
      redirect: (to) => {
        // /users/${req.params.userid}
        expect(to).to.be.eql(`/`);
        done();
      },
    }

    mw(
      req,
      res,
      (err) => { // next
        
      });
  });

  it('should not redirect to root, and call next', (done) => {
    const mw = authMW({
      
    });

    const req = {
      session: {
        loggedIn: true,
      }
    }

    const res = {
      redirect: (to) => {
        // /users/${req.params.userid}
        // expect(to).to.be.eql(`/`);
        // done();
      },
    }

    mw(
      req,
      res,
      (err) => { // next
        expect(err).to.be.eql(undefined);
        done();
      });
  });
});