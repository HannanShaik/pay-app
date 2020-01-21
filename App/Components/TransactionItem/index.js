import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types'
import styles from './styles'


const getColor = (status) => {
  switch (status) {
    case 'CONFIRMED':
      return 'green'
    case 'REFUNDED':
      return 'red'
    default:
      return 'yellow'
  }
}

const TransactionItem = ({ qrCode, name, amount, currency, status }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={{
          uri: qrCode
        }} />
      <View style={styles.mainView}>
        <Text>{name}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{amount} </Text>
          <Text style={styles.text}>{currency}</Text>
        </View>
      </View>
      <View>
        <Text style={[{ color: getColor(status), ...styles.text }]}>{status}</Text>
      </View>
    </View >
  )
}

TransactionItem.propTypes = {
  qrCode: PropTypes.string,
  name: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  status: PropTypes.string,
}

export default TransactionItem;