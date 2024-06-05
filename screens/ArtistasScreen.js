import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { obtenerArtistas } from '../utils/api'; // Importa la función obtenerArtistas desde el archivo api.js

export default function ArtistasScreen({ route }) {
    const { categoria } = route.params;
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const artistasData = await obtenerArtistas(categoria);
            setArtistas(artistasData);
        }
        fetchData();
    }, [categoria]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Artistas de {categoria}:</Text>
            {artistas.map((artista, index) => (
                <View key={index} style={styles.artistaContainer}>
                    <Text style={styles.artistaNombre}>{artista.nombre}</Text>
                    <Text>Popularidad: {artista.popularidad}</Text>
                    <Text>Seguidores: {artista.seguidores}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    artistaContainer: {
        marginBottom: 20
    },
    artistaNombre: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
