import React, {Component} from 'react'
import{
	View,
	Image,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableWithoutFeedback,
	ScrollView,
	Dimensions,
	ImageBackground
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

import TabsEpisodes from './TabsEpisodes'

const{width, height} = Dimensions.get('window')

class Details extends Component{
	render(){

		const {episodes} = this.props.item.details
		const {name} = this.props.item
		const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = this.props.item.details
		return(
			<ScrollView style={styles.container}>
				<ImageBackground
					style={styles.thumbnail}
					source={{uri: thumbnail}}
				>
					<View style={styles.buttonPlay}>
						<TouchableWithoutFeedback
						onPress={null}

						>
						<View>
							<Icon 
								style={styles.iconPlay}
								name="play-circle"
								size={90}
								color="white"
							/>
						</View>
					</TouchableWithoutFeedback>
					</View>
				</ImageBackground>
				<View style={styles.descriptionContainer}>
					<View style={styles.subtitle}>
						<Text style={[styles.text, styles.subTitleText]}>{year}</Text>
						<Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
						<Text style={[styles.text, styles.subTitleText]}>{season} Season</Text>
					</View>
					<View style={styles.description}>
						<Text style={[styles.text, styles.light]}>{description}</Text>
					</View>
					<Text style={styles.text}>Cast: {cast}</Text>
					<Text style={styles.text}>Creator: {creator}</Text>
					<View style={styles.shareListIcons}>
						<View style={styles.myListIcon}>
							<IonIcons
								style={styles.listIcon}
								name="md-checkmark"
								color="grey"
								size={25}
							/>
							<Text style={styles.text}>My List</Text>
						</View>
						<View style={styles.myShareIcon}>
							<Icon
								style={styles.shareIcon}
								name="share-alt"
								color="grey"
								size={25}
							/>
							<Text style={styles.text}>Share</Text>
						</View>
					</View>
				</View>
				<TabsEpisodes data={episodes} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#181818'
	},
	thumbnail:{
		width: width,
		height: 300	
	},
	buttonPlay:{
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center'
	},
	iconPlay:{
		opacity: 0.5,
		backgroundColor: 'transparent'
	},
	descriptionContainer:{
		paddingHorizontal: 20
	},
	subtitle:{
		flexDirection: 'row'
	},
	subTitleText:{
		marginRight: 20
	},
	text:{
		color: '#b3b3b3',
		fontSize: 16
	},
	shareListIcons:{
		flexDirection: 'row',
		marginVertical: 30
	},
	listIcon:{
		height: 25 
	},
	shareIcon:{
		height: 25
	},
	myListIcon:{
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 40
	},
	myShareIcon:{
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	description:{
		marginVertical: 10
	},
	light:{
		fontWeight: '200'
	}

	
})

export default Details