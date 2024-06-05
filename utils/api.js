import axios from 'axios';

// Función para obtener la información de los artistas
async function obtenerArtistas(categoria) {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            type: 'multi',
            offset: '0',
            limit: '4', // Cambiado a 4 para obtener 4 artistas
            numberOfTopResults: '5',
            q: categoria // Agregamos la categoría como parámetro de búsqueda
        },
        headers: {
            'x-rapidapi-key': 'fc25086129msh657f607c832b399p115ca1jsn1e775b43e022',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const data = response.data;
        
        console.log('Datos recibidos de la API:', JSON.stringify(data, null, 2)); // Verifica la estructura de los datos
        
        if (data.artists && data.artists.items) {
            const artistas = data.artists.items.map(item => {
                console.log('Item procesado:', item);
                return {
                    nombre: item.data.profile.name,
                    popularidad: item.data.popularity,
                    seguidores: item.data.followers.total
                };
            });
            return artistas;
        } else {
            console.error("Estructura de datos inesperada:", data);
            return [];
        }
    } catch (error) {
        console.error("Error al obtener artistas:", error);
        return [];
    }
}

export { obtenerArtistas };
