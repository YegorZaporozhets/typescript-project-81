export type TemplateType = {
  [key: string]: string,
};

export type OptionsType = {
  url?: string,
  method?: 'post' | 'get',
};

export type AttributesType = {
  [key: string]: string | undefined,
  as?: keyof HTMLElementTagNameMap,
};

export interface IElement {
  toString: () => string,
  tagName: keyof HTMLElementTagNameMap
}
