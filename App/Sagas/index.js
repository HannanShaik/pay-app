import { takeLatest, all } from 'redux-saga/effects'
import { TransactionTypes } from 'App/Stores/Transactions/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchTransactions } from './TransactionSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchTransactions()` when a `FETCH_USER` action is triggered
    takeLatest(TransactionTypes.FETCH_TRANSACTIONS, fetchTransactions),
  ])
}
