import { describe, expect, test } from 'vitest';
import Tag from '../generator/tag';
import sampleData from '../__fixtures__/tag';

describe('Test Tag generator', () => {
  sampleData.forEach(({
    tag, slot, attributes, resultString,
  }) => {
    test(`Create tag "${tag}"`, () => {
      expect(new Tag(tag, attributes, slot).toString()).toBe(resultString);
    });
  });
});
