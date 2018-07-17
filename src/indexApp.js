import React, {Component} from 'react'
import {
	Navigator
} from 'react-native-deprecated-custom-components'﻿

import App from './app'
import Search from './components/Search'

class IndexApp extends Component{

	_renderScene(route, navigator){
		var navigator = {navigator}

		switch(route.ident){
			case 'App':
				return(
					<App {...navigator}/>
				)
			case 'Search':
				return(
					<Search {...navigator}/>
				)

		}
	}
	render(){
		return(
			<Navigator
				initialRoute={{ident: 'App'}}
				renderScene={this._renderScene}

			/>
		)
	}
}

export default IndexApp