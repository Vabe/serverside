var expect = require('chai').expect;
var requireOptionMW = require('../../../middleware/requireOption');

describe('requireOption middleware ', () => {
  it('should throw error', () => {
    expect(requireOptionMW).to.throw();
  });

  it('should not throw error', () => {
    const propMock = function () { };
    const mockObj = {
      propMock
    }
    const obj = requireOptionMW(mockObj, 'propMock');
    expect(obj).not.to.throw();
  });
});