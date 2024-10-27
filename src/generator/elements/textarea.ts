import { AttributesType, IElement } from '../types';
import Tag from './tag';

export default class Textarea implements IElement {
  public tagName: keyof HTMLElementTagNameMap = 'textarea';

  private defaultAttributes: AttributesType = { cols: '20', rows: '40' };

  constructor(public attributes: AttributesType = {}) {}

  public toString() {
    const { value, ...otherAttributes } = this.attributes;
    return new Tag(
      this.tagName,
      { ...this.defaultAttributes, ...otherAttributes },
      value,
    ).toString();
  }
}
