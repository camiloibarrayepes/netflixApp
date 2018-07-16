import React, {Component} from 'react'
import{
	Text,
	View,
	StyleSheet
} from 'react-native'

import SideMenu from 'react-native-side-menu'

import List from './components/List'
import Slide from './components/Slider'
import Header from './components/Header'
import Menu from './components/Menu'



class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			isOpen: false
		}		
	}
	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	updateMenu(isOpen){
		this.setState({isOpen})
	}

	render(){
		return(
			<View style={[{flex: 1}, styles.containter]}>
				<SideMenu
					menu={<Menu />}
					isOpen={this.state.isOpen}
					onChange={(isOpen) => this.updateMenu(isOpen)}
				>
					<Header toggle={this.toggle.bind(this)}/>
					<Slide />
					<List />
				</SideMenu>
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