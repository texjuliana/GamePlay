import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {//topo da pagina
        width: '100%', //ocupa toda a pagina
        paddingHorizontal: 24, //espaçamento lateral
        flexDirection: 'row', //Deixar tudo alinhado
        justifyContent: 'space-between', //utilize toda extremidade
        marginTop: 26,
        marginBottom: 42
    }
});