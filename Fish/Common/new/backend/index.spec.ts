import { assert } from 'chai';
import { WATCH_ALL_FLAG } from './index';

describe(`Testing flags`, () => {
  it(`"watch all" flag is "--watch=backend+frontend"`, () => {
    assert.deepEqual(WATCH_ALL_FLAG, "--watch=backend+frontend")
  })
})
