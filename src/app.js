import React, {Component} from 'react'
import{
	Text,
	View,
	StyleSheet,
	ScrollView
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
			
				<SideMenu
					menu={<Menu />}
					isOpen={this.state.isOpen}
					onChange={(isOpen) => this.updateMenu(isOpen)}
					
				>
				
					<View style={[{flex: 1}, styles.containter]}>
						<Header navigator={this.props.navigator} toggle={this.toggle.bind(this)}/>
						<ScrollView>
							<Slide />
							<List navigator={this.props.navigator} />
						</ScrollView>
					</View>
				
				</SideMenu>

		)
	}
}

const styles = StyleSheet.create({
	containter: {
		backgroundColor: 'black'
	}
})

export default App