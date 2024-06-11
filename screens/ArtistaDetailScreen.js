import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import { ARTISTAS} from '../data/dummy_data'
import ArtistaDetail from "../components/ArtistaDetail"

function ArtistaDetailScree({route, navigation}) {
    const artistaId = route.params.artistaId

    const selectedArtista = ARTISTAS.find((artista) => artista.id === artistaId)

    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedArtista.imageUrl }} />
            <Text style={styles.title}>{selectedArtista.title}</Text>

            <View>
                <Text style={styles.subtitle}>Datos</Text>
                {selectedArtista.datos.map(datos => <Text style={styles.textContent} key={datos}>{datos}</Text>)}
                <Text style={styles.subtitle}>Información</Text>
                {selectedArtista.informacion.map(informacion => <Text style={styles.textContent} key={informacion}>{informacion}</Text>)}
            </View>
        </ScrollView>
    )

}

export default ArtistaDetailScree

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24    
    }


})