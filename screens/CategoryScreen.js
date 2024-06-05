import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const categorias = ["rock", "pop", "jazz", "hip hop"];

export default function CategoriasScreen({ navigation }) {
    const handleCategoriaPress = (categoria) => {
        navigation.navigate('Artistas', { categoria });
    };

    return (
        <View style={styles.container}>
            {categorias.map(categoria => (
                <View key={categoria} style={styles.categoriaContainer}>
                    <Text style={styles.categoriaTitulo}>{categoria}</Text>
                    <Button title={`Ver ${categoria}`} onPress={() => handleCategoriaPress(categoria)} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoriaContainer: {
        marginVertical: 10,
    },
    categoriaTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
