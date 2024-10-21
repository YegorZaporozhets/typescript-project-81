export class Tag {
    public singleTags = ['img', 'br', 'input', 'hr']

    constructor(
        public tagName: keyof HTMLElementTagNameMap = 'div',
        public attributes: {[key: string]: string} = {},
        public slot: string = '',
    ) {}

    public toString(): string {
        const {
            tagName,
            attributes,
            slot
        } = this

        const htmlAttributes = Object.entries(attributes).map<string>(
            ([key, value]) => `${key}="${value}"`
        )
        const tagString = `<${tagName}${htmlAttributes.length ? ` ${htmlAttributes.join(' ')}` : ''}>`

        if (this.isSingleTag()) {
            return tagString
        }

        return `${tagString}${slot}</${tagName}>`
    }


    private isSingleTag(): boolean {
        const {singleTags, tagName} = this
        return singleTags.includes(tagName)
    }
}
