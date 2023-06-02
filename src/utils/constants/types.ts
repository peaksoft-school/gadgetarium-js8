export type MailingListType = {
  name: string
  description: string
  image: string | null
  dateOfStart: string

  dateOfFinish: string
}

export type PostBrandType = {
  name: string
  logo: string | null
}

export type AddProducts = {
  subCategoryId: string | number
  brandId: string | number
  guarantee: number
  name: string
  dateOfIssue: string
  video: string
  PDF: string
  description: string
  subProducts: [
    {
      color: string
      characteristics: {
        additionalProp1: string
        additionalProp2: string
        additionalProp3: string
      }
      price: 0
      quantity: 1
      images: [string, string]
    }
  ]
}
