import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';

import { Cores } from '../constants/colors';
import {
    Skin,
    Raridade,
    TipoArma,
    SKINS_DATA,
    FILTROS_RARIDADE,
    FILTROS_TIPO_ARMA,
} from '../constants/data';
import { SkinCard } from '../components/SkinCard';
import { FiltroBotao } from '../components/FiltroBotao';

export const CatalogScreen = () => {
    const [filtroRaridade, setFiltroRaridade] = useState<Raridade | 'Todas'>('Todas');
    const [filtroTipoArma, setFiltroTipoArma] = useState<TipoArma | 'Todos'>('Todos');
    const [skinsExibidas, setSkinsExibidas] = useState<Skin[]>(SKINS_DATA);

    useEffect(() => {
        let skinsFiltradas: Skin[] = SKINS_DATA;

        if (filtroRaridade !== 'Todas') {
            skinsFiltradas = skinsFiltradas.filter(
                (skin) => skin.raridade === filtroRaridade
            );
        }
        if (filtroTipoArma !== 'Todos') {
            skinsFiltradas = skinsFiltradas.filter(
                (skin) => skin.tipoArma === filtroTipoArma
            );
        }
        setSkinsExibidas(skinsFiltradas);
    }, [filtroRaridade, filtroTipoArma]);

    return (
        <View style={styles.screen}>
            <StatusBar barStyle="light-content" />

            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>Catálogo de Skins</Text>
                <Text style={styles.subtitulo}>Skins em Destaque</Text>
            </View>

            <View style={styles.filtroContainer}>
                <View style={styles.filtroGrupo}>
                    <Text style={styles.filtroLabel}>Raridade:</Text>
                    <View style={styles.filtroBotoesContainer}>
                        {FILTROS_RARIDADE.map((raridade) => (
                            <FiltroBotao
                                key={raridade}
                                label={raridade}
                                onPress={() => setFiltroRaridade(raridade)}
                                isAtivo={filtroRaridade === raridade}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.filtroGrupo}>
                    <Text style={styles.filtroLabel}>Tipo de Arma:</Text>
                    <View style={styles.filtroBotoesContainer}>
                        {FILTROS_TIPO_ARMA.map((tipo) => (
                            <FiltroBotao
                                key={tipo}
                                label={tipo}
                                onPress={() => setFiltroTipoArma(tipo)}
                                isAtivo={filtroTipoArma === tipo}
                            />
                        ))}
                    </View>
                </View>
            </View>

            <ScrollView style={styles.catalogContainer}>
                {skinsExibidas.length === 0 ? (
                    <Text style={styles.semResultados}>Nenhuma skin encontrada.</Text>
                ) : (
                    skinsExibidas.map((skin) => (
                        <SkinCard skin={skin} key={skin.id} />
                    ))
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Cores.fundo,
        paddingTop: 60,
    },
    headerContainer: {
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    filtroContainer: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    filtroGrupo: {
        marginBottom: 12,
    },
    filtroLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Cores.textoSecundario,
        marginBottom: 8,
    },
    filtroBotoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    catalogContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    semResultados: {
        color: Cores.textoSecundario,
        textAlign: 'center',
        marginTop: 32,
        fontSize: 16,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Cores.acentoPrincipal,
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 18,
        color: Cores.textoSecundario,
        textAlign: 'center',
    },
});