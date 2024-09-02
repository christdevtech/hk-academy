export const TRANSACTIONS = `query Transactions{
  Tansactions(limit:500){
    docs{
      id
      }
    }
  }
`

export const TRANSACTION = `
query Transaction($id: String){
    Transactions(where:{
      id: {
        equals: $id
          }
        }limit:1){
  docs{
    id
    transId
    title
    amount
    transactionDate
    user {
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
