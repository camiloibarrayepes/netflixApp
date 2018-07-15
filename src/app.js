import React, {Component} from 'react'
import{
	Text,
	View,
	StyleSheet
} from 'react-native'

import List from './components/List'
import Slide from './components/Slider'


class App extends Component {
	render(){
		return(
			<View style={[{flex: 1}, styles.containter]}>
				<Slide />
				<List />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containter: {
		backgroundColor: 'black'
	}
})

export default App