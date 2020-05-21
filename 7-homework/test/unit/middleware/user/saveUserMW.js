var expect = require('chai').expect;
var saveUserMW = require('../../../../middleware/user/saveUserMW');

describe('saveUser middleware ', () => {
  it('should save a new user', (done) => {
    const mw = saveUserMW({
      UserModel: {}
    });

    const req = {
      body: {
        name: 'Bence Valent',
        email: 'bence@valent.com',
        password: 'nohash'
      }
    }

    const res = {
      locals: {
        user: {
          save: (cb) => {
            cb(null);
          }
        }  
      },
      redirect: (to) => {
        expect(to).to.be.eql(`/users`);
        done();
      },
    }

    mw(
      req,
      res,
      (err) => {
        
      });
  });

  it('should call next with error message', (done) => {
    const mw = saveUserMW({
      UserModel: {}
    });

    const req = {
      body: {
        name: 'Bence Valent',
        email: 'bence@valent.com',
        password: 'nohash'
      }
    }

    const res = {
      locals: {
        user: {
          save: (cb) => {
            cb('error');
          }
        }  
      },
      redirect: (to) => {

      },
    }

    mw(
      req,
      res,
      (err) => {
        expect(err).to.be.eql('error');
        done();
      });
  });

  it('should redirect to /users', (done) => {

    class UserModelMock { 
      save (cb) {
        cb(null);
      }
    };

    const mw = saveUserMW({
      UserModel: UserModelMock
    });

    const req = {
      body: {
        name: 'Bence Valent',
        email: 'bence@valent.com',
        password: 'nohash'
      }
    }

    const res = {
      locals: {
         
      },
      redirect: (to) => {
        expect(to).to.be.eql(`/users`);
        done();
      },
    }

    mw(
      req,
      res,
      (err) => {
        
      });
  });

  it('should call next if any req param undefined', (done) => {

    class UserModelMock { 
      save (cb) {
        cb(null);
      }
    };

    const mw = saveUserMW({
      UserModel: UserModelMock
    });

    const req = {
      body: {
        title: undefined,
        createdAt: '2020.05.05',
      },
      params: {

      }
    }

    const res = {
      locals: {
        
      },
      redirect: (to) => {

      },
    }

    mw(
      req,
      res,
      (err) => {
        expect(err).to.be.eql(undefined);
        done();
      });
  });
});