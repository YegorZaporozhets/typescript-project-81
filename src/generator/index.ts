import Tag from './tag';

type TemplateType = {
  [key: string]: string,
};

type OptionsType = {
  url?: string,
  method?: 'post' | 'get'
};

export default class HexletCode {
  public static forForm(
    template: TemplateType,
    { url, method }: OptionsType,
    cb: () => void,
  ) {
    if (cb) {
      cb();
    }

    return new Tag(
      'form',
      { action: url ?? '#', method: method ?? 'post' },
    ).toString();
  }
}
