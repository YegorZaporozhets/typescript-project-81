// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, test } from 'vitest';
import HexletCode from '../generator';
import sampleData from '../__fixtures__/for-form';

describe('Test forForm:', () => {
  test('Empty Form', () => {
    expect(HexletCode.forForm({}, {}, () => {})).toBe('<form action="#" method="post"></form>');
  });

  test('Form with action url', () => {
    expect(HexletCode.forForm({}, { url: '/users' }, () => {})).toBe('<form action="/users" method="post"></form>');
  });

  test('Form with input fields', () => {
    sampleData.forEach(({
      template, formOptions, cb, result,
    }) => {
      expect(HexletCode.forForm(
        template,
        formOptions,
        cb,
      )).toBe(result);
    });
  });
});
