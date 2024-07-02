import commonStyle from "@/app/components/styles";

const styles = {
    successMsg : {
       fontFamily : commonStyle.font.formTitle,
       letterSpacing : 0.5,
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