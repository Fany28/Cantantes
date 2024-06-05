import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { obtenerArtistas } from '../utils/api';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';
export default function ArtistasScreen({ route }) {
    const { categoria } = route.params;
    const [artistas, setArtistas] = useState([]);
    const [loading, setLoading] = useState(true); // Para manejar el estado de carga
    const navigation = useNavigation()

    useEffect(() => {
        async function fetchData() {
            try {
                console.log('Categoría recibida:', categoria);
                const artistasData = await obtenerArtistas(categoria);
                console.log('Datos de artistas recibidos:', artistasData); // Verificar los datos recibidos
                setArtistas(artistasData);
            } catch (error) {
                console.error('Error al obtener los artistas:', error);
            } finally {
                setLoading(false); // Finalizar la carga
            }
        }
        fetchData();
    }, [categoria]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Cargando artistas...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Artistas de {categoria}:</Text>
            {artistas.length === 0 ? (
                <Text>No se encontraron artistas.</Text>
            ) : (
                artistas.map((artista, index) => (
                    <View key={index} style={styles.artistaContainer}>
                        <Text style={styles.artistaNombre}>{artista.nombre}</Text>
                        <Text>Popularidad: {artista.popularidad}</Text>
                        <Text>Seguidores: {artista.seguidores}</Text>
                    </View>
                ))
            )}
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
    },
    loading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }
});
