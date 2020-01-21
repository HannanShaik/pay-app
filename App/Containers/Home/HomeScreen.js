import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import TransactionActions from 'App/Stores/Transactions/Actions'
import Style from './HomeScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import TransactionItem from '../../Components/TransactionItem'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake transactions.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class HomeScreen extends React.Component {
  componentDidMount() {
    this._fetchTransactions()
  }
  DATA = [{
    id: 1
  },
  {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  },
  {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  }, {
    id: 1
  }]
  render() {
    return (
      <View
        style={[
          { flex: 1 },
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        {this.props.transactionsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
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
          )}
        <Button style={{
          position: 'absolute', bottom: 20
        }} title="Update Status" />
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
