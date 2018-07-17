import React, {Component} from 'react'
import {View,Dimensions,Platform, StyleSheet} from 'react-native';
import {SceneMap,TabView, TabBar,PagerPan,PagerScroll } from 'react-native-tab-view';
import Episodes from './Episodes'
import Trailers from './Trailers'

class TabsEpisodes extends Component{
	constructor(props){
		super(props)
		this.state = {
			index: 0,
			routes: [
				{key: '1', title: 'Episodes'},
				{key: '2', title: 'Trailers & More'}
			]
		}
	}

	_handleChangeTab(index){
		this.setState({index})
	}

	_renderHeader(props){
		return <TabBar {...props} />
	}

	_renderScene({route}){
		switch(route.key){
			case '1':
				return <Episodes episodes={this.props.data} />
			case '2':
				return <Trailers />
			default:
				return null
		}
	}

	 _renderPager(props){
     return (Platform.OS === 'ios') ? <PagerScroll {...props} /> : <PagerPan {...props} />
   	}
	render(){
		return(
			 <TabView
			 	style={styles.container}
	        	navigationState={this.state}
	          	renderScene={this._renderScene.bind(this)}
	          	renderTabBar={this._renderHeader}
	          	onIndexChange={this._handleChangeTab.bind(this)}
	          	initialLayout={{
	            	width: Dimensions.get('window').width,
	            	height: Dimensions.get('window').height
	          	}}
	          	renderPager={this._renderPager}
	        />
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderTopWidth: 2,
		borderColor: 'black'
	},
})

export default TabsEpisodes