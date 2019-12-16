/*
 * @Description:
 * @Author: 胡阳阳
 * @Date: 2019-12-12 07:55:36
 * @LastEditTime: 2019-12-16 20:12:19
 * @LastEditors: 胡阳阳
 */
const assert = require('assert');

describe('test webpack base test', () => {
  const baseConfig = require('../../lib/webpack.base');
  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('./src/index/index.js') > -1, true);
    assert.equal(baseConfig.entry.search.indexOf('./src/search/index.js') > -1, true);
  });
});
