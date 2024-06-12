import {StyleSheet } from 'react-native'


function ArtistaDetail({informacion, datos, id, categoryIds, title, imageUrl}){
    return(

        <View style={styles.details}>
            <Text style={styles.detailItem}>{informacion.map}</Text>
            <Text style={styles.detailItem}>{datos.map}</Text>
            <Text style={styles.detailItem}>{id.map}</Text>
            <Text style={styles.detailItem}>{categoryIds.map}</Text>
            <Text style={styles.detailItem}>{title.map}</Text>
            <Text style={styles.detailItem}>{imageUrl.map}</Text>
        </View>
    )

}

export default ArtistaDetail

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})
