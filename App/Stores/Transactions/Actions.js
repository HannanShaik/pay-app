import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchTransactions: null,
  fetchTransactionsLoading: null,
  fetchTransactionsSuccess: ['transactionInfo'],
  fetchTransactionsFailure: ['errorMessage'],
})

export const TransactionTypes = Types
export default Creators
