import { put, call } from 'redux-saga/effects'
import TransactionActions from 'App/Stores/Transactions/Actions'
import TransactionService from 'App/Services/TransactionService'

export function* fetchTransactions() {
  yield put(TransactionActions.fetchTransactionsLoading())
  const transactions = yield call(TransactionService.fetchTransactions)
  if (transactions) {
    yield put(TransactionActions.fetchTransactionsSuccess(transactions))
  } else {
    yield put(
      TransactionActions.fetchTransactionsFailure('There was an error while fetching transactions.')
    )
  }
}
