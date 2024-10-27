import { AttributesType, IElement, TemplateType } from '../types';
import Tag from './tag';
import Input from './input';
import Textarea from './textarea';

export default class Form implements IElement {
  private fields: (Input | Textarea | Tag)[] = [];

  public tagName: keyof HTMLElementTagNameMap = 'form';

  constructor(private attributes: AttributesType, private template: TemplateType) {}

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

  public toString() {
    return new Tag(
      this.tagName,
      this.attributes,
      this.fields.reduce((strFields, field) => strFields + field.toString(), ''),
    ).toString();
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
