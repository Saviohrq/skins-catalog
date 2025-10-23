import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Cores } from '../constants/colors';

type FiltroBotaoProps = {
    label: string;
    onPress: () => void;
    isAtivo: boolean;
};

export const FiltroBotao = ({ label, onPress, isAtivo }: FiltroBotaoProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.filtroBotao, isAtivo && styles.filtroBotaoAtivo]}>
            <Text style={[styles.filtroTexto, isAtivo && styles.filtroTextoAtivo]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    filtroBotao: {
        backgroundColor: Cores.fundoBotao,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    filtroBotaoAtivo: {
        backgroundColor: Cores.acentoSecundario,
    },
    filtroTexto: {
        color: Cores.textoPrincipal,
        fontSize: 14,
    },
    filtroTextoAtivo: {
        color: Cores.fundo,
        fontWeight: 'bold',
    },
});