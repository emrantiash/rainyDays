import commonStyle from "../components/styles";

const styles = {
    container : {
        backgroundColor : commonStyle.color.lightWhite,
        margin : 5,
        fontSize : 12,
        padding : 20,
        borderRadius : 8
    },
    codSection : {
        fontSize :15,
        fontWeight : 'bold'
    },
    innerBlock : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent  : 'space-between'
    },
    statusClass : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        fontWeight : 'bold',
        // color : commonStyle.color.orange,
       
    },
    progressBar : {
        margin : 10 ,
        height : 40
        // padding : 5 
    },
    reference: {
        borderRadius :  8 ,
        // backgroundColor: commonStyle.color.red,
        // paddingLeft: 5,
         color: commonStyle.color.red
    },
    fontSize : {
        fontFamily :  '__Inter_Fallback_e66fe9',
         fontSize  : '1rem' //commonStyle.size.success,
        // color : commonStyle.color.green
    }
    ,
    bold : {
        // fontWeight : 'bold'
    }
}

export default styles;