import commonStyle from "../components/styles";

const styles = {
    address :{
        fontFamily : commonStyle.font.menuFont,
        fontSize : 12
    },
    border  : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 10 
    },
    innerSuccessPart : {
        display : 'flex',
        flexDirection : 'column',
        // justifyContent : 'space-between',
    },
    successPart : {
        width : '100%',
        backgroundColor :  commonStyle.color.green
    },
    successPartDiv : {
        display : 'flex',
        flexDirection  :'row',
        justifyContent : 'space-around'
    },
    codRoot : {
        display : 'flex',
        flexDirection  :'row',
        justifyContent : 'space-between'
    },
    cod : {
        // color : commonStyle.color.red,
        fontSize : 12,
        padding : 10,
        letterSpacing : 1.0,
        fontWeight : 'bold'
    },
    change : {
        cursor : commonStyle.cursor,
        fontSize : 11
    }
}

export default styles;