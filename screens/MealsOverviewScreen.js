import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react'

import { ARTISTAS, CATEGORIES } from "../data/dummy_data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId
    console.log('catId', catId)

    const displayedMeals = ARTISTAS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderMealItem(itemData) {
    
        return(

            <MealItem
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
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})