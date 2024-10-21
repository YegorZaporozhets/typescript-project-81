import { describe, expect, test } from 'vitest';
import HexletCode from '../generator';

describe('Test forForm:', () => {
  test('Empty Form', () => {
    expect(HexletCode.forForm({}, {}, () => {})).toBe('<form action="#" method="post"></form>');
  });

  test('Form with action url', () => {
    expect(HexletCode.forForm({}, { url: '/users' }, () => {})).toBe('<form action="/users" method="post"></form>');
  });
});
