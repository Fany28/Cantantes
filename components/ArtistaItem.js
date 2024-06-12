import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native"
import { useNavigation} from '@react-navigation/native'
import ArtistaDetail from "./ArtistaDetail"


function ArtistaItem({ id, title, imageUrl}){
    console.log('title', title)
    console.log('imageUrl', imageUrl)

    const navigation = useNavigation()
   
    function selectArtistaItemHandler(){
        navigation.navigate('ArtistaDetail', {artistaId: id})
    }

    return(
        <View style={styles.artistaItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null) } 
                onPress={()=>selectArtistaItemHandler(id)}
            >
                <View>
                    <View>
                        <Image 
                            source={{uri: imageUrl}}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )

}

export default ArtistaItem

const styles = StyleSheet.create({
    artistaItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})