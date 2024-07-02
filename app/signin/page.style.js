import commonStyle from "../components/styles";

const styles ={

    errorMsg : {
        // fontSize : 15,
        fontFamily : commonStyle.font.menuFont,
        letterSpacing : 0.5 ,
        fontSize :  commonStyle.size.success,
        color : commonStyle.color.red
    },
    loading : {
        margin : 10,
        padding : 10 ,

    },
    goRight : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between'
        
    }
    

}

export default styles;