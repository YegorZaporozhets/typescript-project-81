const sampleData: {
  tag: keyof HTMLElementTagNameMap,
  attributes?: Record<string, string>,
  slot?: string,
  resultString: string
}[] = [
  {
    tag: 'div',
    attributes: {
      class: 'my-html-class',
      'data-attribute-test': 'test',
    },
    slot: '<h1>Temp</h1>',
    resultString: '<div class="my-html-class" data-attribute-test="test"><h1>Temp</h1></div>',
  },
  {
    tag: 'br',
    slot: 'test',
    resultString: '<br>',
  },
  {
    tag: 'img',
    attributes: {
      src: '/temp/test.jpg',
      alt: 'image',
    },
    resultString: '<img src="/temp/test.jpg" alt="image">',
  },
];
export default sampleData;
