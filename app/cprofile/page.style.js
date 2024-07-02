import commonStyle from "@/app/components/styles";

const styles = {
    successMsg : {
        display  : 'flex',
        justifyContent : 'flex-end',
       fontFamily : commonStyle.font.menuFont,
       letterSpacing : 1.0,
       padding:5,
    //    fontStyle : 'italic',
       color : commonStyle.color.secondary

    },
    errorMsg :{
        fontFamily : commonStyle.font.helvetica,
        letterSpacing : 1.0,
        // fontStyle : 'italic',
        color : commonStyle.color.red
    }
}

export default styles ;