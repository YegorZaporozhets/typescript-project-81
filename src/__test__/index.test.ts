import { describe, expect, test } from 'vitest';
import Tag from '../generator/elements/tag';
import sampleDataTag from '../__fixtures__/tag';
import HexletCode from '../generator';
import sampleData from '../__fixtures__/for-form';

describe('Test Tag generator', () => {
  sampleDataTag.forEach(({
    tag, slot, attributes, resultString,
  }) => {
    test(`Create tag "${tag}"`, () => {
      expect(new Tag(tag, attributes, slot).toString()).toBe(resultString);
    });
  });
});

describe('Test formFor:', () => {
  test('Empty Form', () => {
    expect(HexletCode.formFor({}, {}, () => 0)).toBe('<form method="post" action="#"></form>');
  });

  test('Form with action url', () => {
    expect(HexletCode.formFor({}, { url: '/users' }, () => 0)).toBe('<form method="post" action="/users"></form>');
  });

  test('Form with input fields', () => {
    sampleData.forEach(({
      template, formOptions, cb, result,
    }) => {
      expect(HexletCode.formFor(
        template,
        formOptions,
        cb,
      )).toBe(result);
    });
  });
});
