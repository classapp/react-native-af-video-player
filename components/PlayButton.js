import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

// const backgroundColor = 'transparent'
const backgroundColor = '#000000FF'
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  playButton: {
    opacity: 0.9,
  },
  playContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBorder: {
    width: 75,
    height: 75,
    borderRadius: width / 3,
    backgroundColor,
  }
})

const PlayButton = props => (
  <View style={[styles.playContainer]}>
    <TouchableOpacity
      style={[styles.playBorder]}
      onPress={() => props.onPress()}
    >
      <Icons
        style={styles.playButton}
        name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
        color={props.theme}
        size={75}
      />
    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
}

export { PlayButton }
