// var chai = require('chai');
// var spies = require('chai-spies');
var expect = require('chai').expect;
var saveProjectMW = require('../../../../middleware/project/saveProjectMW');

// chai.use(spies);

describe('saveProject middleware ', () => {
  it('should save a new project', (done) => {
    const mw = saveProjectMW({
      ProjectModel: {}
    });

    const req = {
      body: {
        title: 'Sample Project',
        createdAt: '2020.05.05',
      },
      params: {
        userid: 'u-123'
      }
    }

    const res = {
      locals: {
        project: {
          save: (cb) => {
            cb(null);
          }
        }  
      },
      redirect: (to) => {
        // /users/${req.params.userid}
        expect(to).to.be.eql(`/users/u-123`);
        done();
      },
    }

    mw(
      req,
      res,
      (err) => { // next
        
      });
  });

  it('should call next with error message', (done) => {
    const mw = saveProjectMW({
      ProjectModel: {}
    });

    const req = {
      body: {
        title: 'Sample Project',
        createdAt: '2020.05.05',
      },
      params: {
        userid: 'u-123'
      }
    }

    const res = {
      locals: {
        project: {
          save: (cb) => {
            cb('error');
          }
        }  
      },
      redirect: (to) => {
        // /users/${req.params.userid}
        // expect(to).to.be.eql(`/users/u-123`);
        // done();
      },
    }

    mw(
      req,
      res,
      (err) => { // next
        expect(err).to.be.eql('error');
        done();
      });
  });

  it('should be able to create new Project', (done) => {

    class ProjectModelMock { 
      save (cb) {
        cb(null);
      }
    };

    const mw = saveProjectMW({
      ProjectModel: ProjectModelMock
    });

    const req = {
      body: {
        title: 'Sample project',
        createdAt: '2020.05.05',
      },
      params: {
        userid: 'u-123'
      }
    }

    const res = {
      locals: {
        
      },
      redirect: (to) => {
        // /users/${req.params.userid}
        expect(to).to.be.eql(`/users/u-123`);
        done();
      },
    }

    mw(
      req,
      res,
      (err) => { // next
        
      });
  });

  it('should redirect to /projects', (done) => {

    class ProjectModelMock { 
      save (cb) {
        cb(null);
      }
    };

    const mw = saveProjectMW({
      ProjectModel: ProjectModelMock
    });

    const req = {
      body: {
        title: 'Sample project',
        createdAt: '2020.05.05',
      },
      params: {
        
      }
    }

    const res = {
      locals: {
        
      },
      redirect: (to) => {
        // /users/${req.params.userid}
        expect(to).to.be.eql(`/projects`);
        done();
      },
    }

    mw(
      req,
      res,
      (err) => { // next
        
      });
  });

  it('should call next if any req param undefined', (done) => {

    class ProjectModelMock { 
      save (cb) {
        cb(null);
      }
    };

    

    const mw = saveProjectMW({
      ProjectModel: ProjectModelMock
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
        // /users/${req.params.userid}
        // expect(to).to.be.eql(`/projects`);
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