import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react'

import { ARTISTAS, CATEGORIES } from "../data/dummy_data";
import ArtistaItem from "../components/ArtistaItem";

function ArtistasOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId
    console.log('catId', catId)

    const displayedArtistas = ARTISTAS.filter((ArtistaItem) => {
        return ArtistaItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderArtistaItem(itemData) {
    
        return(

            <ArtistaItem
                id={itemData.item.id} 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
            />
        )

    }

    return(
        <View style={styles.container}>
            <Text></Text>
            <FlatList 
                data={displayedArtistas}
                keyExtractor={(item) => item.id}
                renderItem={renderArtistaItem}
            />
        </View>
    )
}

export default ArtistasOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})