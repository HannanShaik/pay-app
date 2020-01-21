/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TransactionTypes } from './Actions'

export const fetchTransactionsLoading = (state) => ({
  ...state,
  transactionsLoading: true,
  errorMessage: null,
})

export const fetchTransactionsSuccess = (state, { transactionInfo }) => ({
  ...state,
  transactions: transactionInfo.items,
  transactionsLoading: false,
  errorMessage: null,
})

export const fetchTransactionsFailure = (state, { errorMessage }) => ({
  ...state,
  transactions: [],
  transactionsLoading: false,
  errorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [TransactionTypes.FETCH_TRANSACTIONS_LOADING]: fetchTransactionsLoading,
  [TransactionTypes.FETCH_TRANSACTIONS_SUCCESS]: fetchTransactionsSuccess,
  [TransactionTypes.FETCH_TRANSACTIONS_FAILURE]: fetchTransactionsFailure,
})
