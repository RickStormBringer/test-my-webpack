/*
 * @Description:
 * @Author: 胡阳阳
 * @Date: 2019-12-12 07:55:36
 * @LastEditTime: 2019-12-12 08:20:36
 * @LastEditors: 胡阳阳
 */
const assert = require('assert');

describe('test webpack base test', () => {
  const baseConfig = require('../../lib/webpack.base');
  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index, './src/index/index.js');
    assert.equal(baseConfig.entry.search, './src/search/index.js');
  });
});
