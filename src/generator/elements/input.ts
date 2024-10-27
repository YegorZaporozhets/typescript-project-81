import { AttributesType, IElement } from '../types';
import Tag from './tag';

export default class Input implements IElement {
  public tagName: keyof HTMLElementTagNameMap = 'input';

  private defaultAttributes: AttributesType = { type: 'text' };

  constructor(public attributes: AttributesType = {}) {}

  public toString() {
    return new Tag(
      this.tagName,
      { ...this.defaultAttributes, ...this.attributes },
    ).toString();
  }
}
