import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import TransactionActions from 'App/Stores/Transactions/Actions'
import styles from './HomeScreenStyle'
import { Metrics } from 'App/Theme'
import TransactionItem from '../../Components/TransactionItem'

class HomeScreen extends React.Component {
  componentDidMount() {
    this._fetchTransactions()
  }

  render() {
    return (
      <View
        style={[
          { flex: 1 },
          Metrics.smallHorizontalMargin,
          Metrics.smallVerticalMargin,
        ]}
      >
        {this.props.transactionsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={styles.listContainer}>
              <FlatList
                data={this.props.transactions}
                renderItem={({ item }) => <TransactionItem
                  amount={item.amount}
                  qrCode={item.qr.url}
                  currency={item.currency}
                  name={item.initiatorDetails.contactName}
                  status={item.state}
                />}
                keyExtractor={item => item.id}
              />
              <Button
                onPress={this.props.updateTransactionStatus}
                style={styles.updateButton}
                title="Update Status" />
            </View>
          )}
      </View>
    )
  }

  _fetchTransactions() {
    this.props.fetchTransactions()
  }
}

HomeScreen.propTypes = {
  transactions: PropTypes.array,
  transactionsLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  fetchTransactions: PropTypes.func,
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
  transactionsLoading: state.transactions.transactionsLoading,
  errorMessage: state.transactions.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(TransactionActions.fetchTransactions()),
  updateTransactionStatus: () => dispatch(TransactionActions.updateTransactionStatus('REFUNDED'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
