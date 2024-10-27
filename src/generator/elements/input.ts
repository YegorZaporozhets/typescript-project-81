import { AttributesType, IElement } from '../../types';
import Tag from './tag';

export default class Input implements IElement {
  public tagName: keyof HTMLElementTagNameMap = 'input';

  private defaultAttributes: AttributesType = { type: 'text' };

  constructor(public attributes: AttributesType = {}) {}

  public toString() {
    const { name, ...otherAttributes } = this.attributes;
    const additionalAttributes = name
      ? { name, ...this.defaultAttributes }
      : this.defaultAttributes;

    return new Tag(
      this.tagName,
      { ...additionalAttributes, ...otherAttributes },
    ).toString();
  }
}
