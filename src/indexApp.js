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
					<App />
				)
			case 'Search':
				return(
					<Search />
				)

		}
	}
	render(){
		return(
			<Navigator
				initialRoute={{ident: 'Search'}}
				renderScene={this._renderScene}

			/>
		)
	}
}

export default IndexApp