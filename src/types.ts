export type TemplateType = Record<string, string>;

export interface OptionsType {
  url?: string,
  method?: 'post' | 'get',
}

export interface AttributesType {
  [key: string]: string | undefined,
  as?: keyof HTMLElementTagNameMap,
}

export interface IElement {
  toString: () => string,
  tagName: keyof HTMLElementTagNameMap
}
