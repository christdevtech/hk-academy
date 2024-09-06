export const TRANSACTIONS = `query Transactions{
  Tansactions(limit:500){
    docs{
      slug
      }
    }
  }
`

export const TRANSACTION = `
query Transaction($slug: string){
  Transactions(where: {slug:{equals:$slug}}, limit:1){
    docs{
      id
      transId
      externalId
      title
      amount
      transactionDate
      user{
          id
          email
          name
          roles
        }
      link
      status
      paymentMethod
      createdAt
      redirectUrl
    }
  }
}
`
