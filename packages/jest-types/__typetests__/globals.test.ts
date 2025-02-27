/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {expectError, expectType} from 'tsd-lite';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  test,
} from '@jest/globals';
import type {Global} from '@jest/types';

const fn = () => {};
const doneFn: Global.DoneTakingTestFn = done => {
  done();
};
const asyncFn = async () => {};
const genFn = function* () {};
const timeout = 5;
const testName = 'Test name';

const list = [1, 2, 3];
const table = [
  [1, 2],
  [3, 4],
];
const readonlyTable = [[1, 2], 'one'] as const;

// https://jestjs.io/docs/api#methods
expectType<void>(afterAll(fn));
expectType<void>(afterAll(asyncFn));
expectType<void>(afterAll(genFn));
expectType<void>(afterAll(fn, timeout));
expectType<void>(afterAll(asyncFn, timeout));
expectType<void>(afterAll(genFn, timeout));
expectType<void>(afterEach(fn));
expectType<void>(afterEach(asyncFn));
expectType<void>(afterEach(genFn));
expectType<void>(afterEach(fn, timeout));
expectType<void>(afterEach(asyncFn, timeout));
expectType<void>(afterEach(genFn, timeout));
expectType<void>(beforeAll(fn));
expectType<void>(beforeAll(asyncFn));
expectType<void>(beforeAll(genFn));
expectType<void>(beforeAll(fn, timeout));
expectType<void>(beforeAll(asyncFn, timeout));
expectType<void>(beforeAll(genFn, timeout));
expectType<void>(beforeEach(fn));
expectType<void>(beforeEach(asyncFn));
expectType<void>(beforeEach(genFn));
expectType<void>(beforeEach(fn, timeout));
expectType<void>(beforeEach(asyncFn, timeout));
expectType<void>(beforeEach(genFn, timeout));

expectType<void>(test(testName, fn));
expectType<void>(test(testName, asyncFn));
expectType<void>(test(testName, doneFn));
expectType<void>(test(testName, genFn));
expectType<void>(test(testName, fn, timeout));
expectType<void>(test(testName, asyncFn, timeout));
expectType<void>(test(testName, doneFn, timeout));
expectType<void>(test(testName, genFn, timeout));

// wrong arguments
expectError(test(testName));
expectError(test(testName, timeout));
expectError(test(timeout, fn));

// wrong return value
expectError(test(testName, () => 42));

// mixing done callback and promise/generator
expectError(
  test(testName, async done => {
    done();
  }),
);
expectError(
  test(testName, function* (done) {
    done();
  }),
);

expectType<void>(test(testName, fn));
expectType<void>(test(testName, asyncFn));
expectType<void>(test(testName, genFn));

expectType<void>(test.each(list)(testName, fn));
expectType<void>(test.each(list)(testName, fn, timeout));
expectType<void>(test.each(table)(testName, fn));
expectType<void>(test.each(table)(testName, fn, timeout));
expectType<void>(test.each(readonlyTable)(testName, fn));
expectType<void>(test.each(readonlyTable)(testName, fn, timeout));

expectType<void>(test.only.each(list)(testName, fn));
expectType<void>(test.only.each(list)(testName, fn, timeout));
expectType<void>(test.only.each(table)(testName, fn));
expectType<void>(test.only.each(table)(testName, fn, timeout));
expectType<void>(test.only.each(readonlyTable)(testName, fn));
expectType<void>(test.only.each(readonlyTable)(testName, fn, timeout));

expectType<void>(test.skip.each(list)(testName, fn));
expectType<void>(test.skip.each(list)(testName, fn, timeout));
expectType<void>(test.skip.each(table)(testName, fn));
expectType<void>(test.skip.each(table)(testName, fn, timeout));
expectType<void>(test.skip.each(readonlyTable)(testName, fn));
expectType<void>(test.skip.each(readonlyTable)(testName, fn, timeout));

expectType<void>(
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn),
);

expectType<void>(
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn, timeout),
);

expectType<void>(
  test.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn),
);

expectType<void>(
  test.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn, timeout),
);

expectType<void>(
  test.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn),
);

expectType<void>(
  test.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn, timeout),
);

expectType<void>(test.concurrent.each(list)(testName, asyncFn));
expectType<void>(test.concurrent.each(list)(testName, asyncFn, timeout));
expectType<void>(test.concurrent.each(table)(testName, asyncFn));
expectType<void>(test.concurrent.each(table)(testName, asyncFn, timeout));
expectType<void>(test.concurrent.each(readonlyTable)(testName, asyncFn));
expectType<void>(
  test.concurrent.each(readonlyTable)(testName, asyncFn, timeout),
);

expectType<void>(test.concurrent.only.each(list)(testName, asyncFn));
expectType<void>(test.concurrent.only.each(list)(testName, asyncFn, timeout));
expectType<void>(test.concurrent.only.each(table)(testName, asyncFn));
expectType<void>(test.concurrent.only.each(table)(testName, asyncFn, timeout));
expectType<void>(test.concurrent.only.each(readonlyTable)(testName, asyncFn));
expectType<void>(
  test.concurrent.only.each(readonlyTable)(testName, asyncFn, timeout),
);

expectType<void>(test.concurrent.skip.each(list)(testName, asyncFn));
expectType<void>(test.concurrent.skip.each(list)(testName, asyncFn, timeout));
expectType<void>(test.concurrent.skip.each(table)(testName, asyncFn));
expectType<void>(test.concurrent.skip.each(table)(testName, asyncFn, timeout));
expectType<void>(test.concurrent.skip.each(readonlyTable)(testName, asyncFn));
expectType<void>(
  test.concurrent.skip.each(readonlyTable)(testName, asyncFn, timeout),
);

expectType<void>(
  test.concurrent.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`(testName, asyncFn),
);

expectType<void>(
  test.concurrent.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`(testName, asyncFn, timeout),
);

expectType<void>(
  test.concurrent.only.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`(testName, asyncFn),
);

expectType<void>(
  test.concurrent.only.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`(testName, asyncFn, timeout),
);

expectType<void>(
  test.concurrent.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`(testName, asyncFn),
);

expectType<void>(
  test.concurrent.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`(testName, asyncFn, timeout),
);

expectType<void>(describe.each(list)(testName, fn));
expectType<void>(describe.each(list)(testName, fn, timeout));
expectType<void>(describe.each(table)(testName, fn));
expectType<void>(describe.each(table)(testName, fn, timeout));
expectType<void>(describe.each(readonlyTable)(testName, fn));
expectType<void>(describe.each(readonlyTable)(testName, fn, timeout));

expectType<void>(describe.only.each(list)(testName, fn));
expectType<void>(describe.only.each(list)(testName, fn, timeout));
expectType<void>(describe.only.each(table)(testName, fn));
expectType<void>(describe.only.each(table)(testName, fn, timeout));
expectType<void>(describe.only.each(readonlyTable)(testName, fn));
expectType<void>(describe.only.each(readonlyTable)(testName, fn, timeout));

expectType<void>(describe.skip.each(list)(testName, fn));
expectType<void>(describe.skip.each(list)(testName, fn, timeout));
expectType<void>(describe.skip.each(table)(testName, fn));
expectType<void>(describe.skip.each(table)(testName, fn, timeout));
expectType<void>(describe.skip.each(readonlyTable)(testName, fn));
expectType<void>(describe.skip.each(readonlyTable)(testName, fn, timeout));

expectType<void>(
  describe.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn),
);

expectType<void>(
  describe.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn, timeout),
);

expectType<void>(
  describe.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn),
);

expectType<void>(
  describe.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn, timeout),
);

expectType<void>(
  describe.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn),
);

expectType<void>(
  describe.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(testName, fn, timeout),
);
