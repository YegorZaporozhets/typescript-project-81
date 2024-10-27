import { OptionsType, TemplateType } from '../types';
import Form from '../generator/elements/form';

const template: TemplateType = { name: 'rob', job: 'hexlet', gender: 'm' };

const sampleData: {
  template: TemplateType,
  formOptions: OptionsType,
  cb: (form: Form) => void,
  result: string
}[] = [
  {
    template,
    formOptions: { method: 'post' },
    cb: (form) => {
      form.input('name');
      form.input('job', { as: 'textarea' });
    },
    result: '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>',
  },
  {
    template,
    formOptions: {},
    cb: (form) => {
      form.input('name', { class: 'user-input' });
      form.input('job');
    },
    result: '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob" class="user-input"><label for="job">Job</label><input type="text" name="job" value="hexlet"></form>',
  },
  {
    template,
    formOptions: {},
    cb: (form) => {
      form.input('job', { as: 'textarea', rows: '50', cols: '50' });
    },
    result: '<form action="#" method="post"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>',
  },
  {
    template,
    formOptions: { method: 'post' },
    cb: (form) => {
      form.input('name');
      form.input('job');
      form.submit('Wow');
    },
    result: '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"><label for="job">Job</label><input type="text" name="job" value="hexlet"><input type="submit" value="Wow"></form>',
  },
  {
    template,
    formOptions: { method: 'post' },
    cb: (form) => {
      form.input('name');
      form.input('job');
      form.submit();
    },
    result: '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"><label for="job">Job</label><input type="text" name="job" value="hexlet"><input type="submit" value="Save"></form>',
  },
];

export default sampleData;
