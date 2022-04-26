import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"

export const FocusHistory = ({ history }) => {

  if (!history || !history.length) return <Text style={{ ...styles.title, paddingLeft: spacing.lg }}>We haven't focussed on anything!</Text>
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focussed on</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.md
  }
})