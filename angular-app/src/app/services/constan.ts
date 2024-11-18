export const SIZE_SCREEN = {
    XSS : 576,
    XS : 768,
    SM : 922,
    MD : 1200,
    XL : 1600
}

export const SIZE_TYPE = {
    XS : 'xs',
    SM : 'sm',
    MD : 'md',
    LG : 'lg',
    XL : 'xl',
    XXL : 'xxl'
}

export interface Content {
   vi: ContentDetail,
   cn: ContentDetail,
   en: ContentDetail,
   jp: ContentDetail
}

export interface ContentDetail {
    project: any[],
    new: any[],
    team: any[],
    type: any[],
    cus: any[],
    intro: any[],
}