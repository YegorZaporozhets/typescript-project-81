import { OptionsType, TemplateType } from '../types';
import Form from './elements/form';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class HexletCode {
  public static formFor(
    formTemplate: TemplateType,
    { url, method }: OptionsType,
    cb: (form: Form) => void,
  ) {
    const form = new Form(
      { method: method ?? 'post', action: url ?? '#' },
      formTemplate,
    );

    if (cb) {
      cb(form);
    }

    return form.toString();
  }
}
