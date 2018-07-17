import React, {Component} from 'react'
import{
	View,
	Text,
	TouchableWithoutFeedback,
	StyleSheet,
	Image,
	ImageBackground
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

class Episodes extends Component{
	renderEpisodes(){
		const res = this.props.episodes.map((item, i) => {

			const img = item.image == null ? 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png' : item.image.medium 
			return (
				<View style={styles.video} key={i}>
					<View style={styles.videoEpisode}>
						<ImageBackground
							style={styles.image}
							source={{uri: img}}>
							<View style={styles.buttonPlay}>
								<TouchableWithoutFeedback>
									<View>
										<Icon
											style={styles.iconPlay}
											name="play-circle"
											size={30}
											color="white"
										/>
									</View>
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View style={styles.episodeName}> 
							<Text>{item.number}. {item.name}</Text>
							<Text>{item.runtime}</Text>
						</View>
					</View>
					<Text style={styles.summary}>{item.summary}</Text>
				</View>
			)
		})
		return res
	}
	render(){
		return(
			<View style={styles.container}>
				{this.renderEpisodes()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	image:{
		width: 150,
		height: 80
	}
})

export default Episodes