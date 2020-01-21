import { put } from 'redux-saga/effects'
import TransactionActions from 'App/Stores/Transactions/Actions'

import NavigationService from 'App/Services/NavigationService'

export function* startup() {
  yield put(TransactionActions.fetchTransactions())
  NavigationService.navigateAndReset('MainScreen')
}
