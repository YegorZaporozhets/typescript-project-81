import { AttributesType, IElement, TemplateType } from '../../types';
import Tag from './tag';
import Input from './input';
import Textarea from './textarea';

export default class Form implements IElement {
  private fields: (Input | Textarea | Tag)[] = [];

  public tagName: keyof HTMLElementTagNameMap = 'form';

  constructor(public attributes: AttributesType = {}, private template: TemplateType = {}) {}

  public input(fieldName: string, { as, ...pureAttributes }: AttributesType = {}) {
    if (!this.template[fieldName]) {
      throw new Error(`Field '${fieldName}' does not exist in the template.`);
    }

    this.fields.push(
      Form.createNewField(
        { name: fieldName, value: this.template[fieldName], ...pureAttributes },
        as,
      ),
    );
  }

  public submit(value = 'Save') {
    this.fields.push(
      Form.createNewField({ type: 'submit', value }),
    );
  }

  public toString() {
    return new Tag(
      this.tagName,
      this.attributes,
      this.fieldsToString(),
    ).toString();
  }

  private fieldsToString(): string {
    return this.fields.reduce((strFields, field) => {
      if (field.tagName === 'input' && field.attributes.type === 'submit') {
        return strFields + field.toString();
      }

      if (field.attributes.name) {
        return strFields + Form.getFieldLabelString(field.attributes.name) + field.toString();
      }

      return strFields + field.toString();
    }, '');
  }

  private static getFieldLabelString(name: string): string {
    const labelSlot = String(name).charAt(0).toUpperCase() + String(name).slice(1).toLowerCase();

    return new Tag('label', { for: name }, labelSlot).toString();
  }

  private static createNewField(attributes: AttributesType, as: keyof HTMLElementTagNameMap = 'input'): Input | Textarea | Tag {
    switch (as) {
      case 'input':
        return new Input(attributes);
      case 'textarea':
        return new Textarea(attributes);
      default:
        return new Tag(as, attributes);
    }
  }
}
