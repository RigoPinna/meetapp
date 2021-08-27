import { StyleSheet } from 'react-native';
import { COLORS_APP } from '../components/ui/COLORS_APP';
import { TEXTS_SIZE } from '../components/ui/TEXTS_SIZE';

export const styles = StyleSheet.create({
    wrapperPresentationScreen: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titlePresentation: {
      fontSize:33,
      fontWeight:'bold',
      top:30,
      paddingLeft:10, 
      color:'#FFF',
      position:'absolute' 
    },
    textPresentation: {
        marginTop:15,
        paddingHorizontal:10,
        color:'#4F4F4F',
        fontSize:18,
    },
    imgBG: {
        position:'relative',
        width:'100%',
    },
    textHeader:{
        color: 'white',
        fontSize: 30,
    },
    textBody:{
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },
    bgAppPrimary: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    textContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 60,
        paddingHorizontal: 10,
    },
    button:{
        width: 160,
        height: 40,
        backgroundColor:"#007C84",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    inputText: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'white'
    },
    inputContainer:{
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    pickerIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, 
    },
    pickerAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, 
    },
    textBodySecond:{
        color: 'black',
        fontSize: 20,
        marginTop: 60,
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 250,
    },
    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    imageContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30
    },
    settingsBackground:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom:13,
        paddingHorizontal:13
    },
    fab:{
        backgroundColor: COLORS_APP.beige,
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabLocation:{
        position: 'absolute',
        bottom: 480,
        right: 100
    },
    buttonCamara:{
        width:52,
        height:52,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:4,
        borderColor: 'white',
        borderRadius: 100,
        position:'absolute',
        right:0,
        bottom:10,
        overflow:'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        
    },
    contentHeader:{
        backgroundColor: COLORS_APP.skyblue4,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 70,
    },
    buttonDotts:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCreate:{
        flexDirection:'row',
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:4,
        borderColor: 'white',
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    contentGroups:{
        height: '100%',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    itemList:{
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: COLORS_APP.black1,
        borderBottomWidth: 5,
    },
    imageList:{
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '100%',
        height: '90%',
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 13,
        paddingTop:10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 20,
      },
      header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});

export const styles2 = StyleSheet.create({
    wrapperPresentation: {
        height:'100%',
        backgroundColor:'#FFF',
        flexDirection: 'column',
        alignItems:'center',
    },
    iconAppCenter: {
        position: 'absolute',
        top:50,
    },
    buttonPrimary:{
        flexDirection:'row',
        width: 160,
        height: 40,
        borderRadius: 100,
        justifyContent: 'space-evenly',
        alignItems:'center',
        overflow:'hidden',
        position:'relative',
        backgroundColor:'pink'
        // marginHorizontal: 10,
    },
    buttonSeconday: {
        flexDirection:'row',
        width: 160,
        height: 40,
        backgroundColor:"#FFF",
        borderRadius: 100,
        justifyContent: 'space-evenly',
        alignItems:'center',
        borderWidth:2,
        borderColor:COLORS_APP.primary
    },
    textButtonSecondary : {
        textAlign: 'center',
        fontSize: TEXTS_SIZE.small,
        color: COLORS_APP.primary,
    },
    textButtonPrimary: {
        textAlign: 'center',
        fontSize: TEXTS_SIZE.small,
        color: 'white',

    },
    ButtonCamera: {
        width:52,
        height:52,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:4,
        borderColor: 'white',
        borderRadius: 100,
        position:'absolute',
        right:0,
        bottom:10,
        overflow:'hidden'
    },
    bgButtonCamera : {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        width:'100%',
        height:'100%',
        borderRadius: 20,
    },
    textInput: {
        width: '100%',
    },
    textInputContainer: {
        
    },
    textSelect: {
        width: '100%',
        height:50,
        borderRadius: 100,
        backgroundColor:'#F0F0F0',
        paddingLeft:30,
        paddingTop:15,
        position:'relative',
        borderWidth:1,
        borderColor:'#F0F0F0',
    },
    wrapperRegisterNumberPhone:{
        display: 'flex',
        alignItems:'center', 
        flexDirection: 'row',width: '100%', 
        height: 50,
        marginTop:13, 
        paddingHorizontal:13
    },
    displayInline: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    headerTitleScreens:{
        display:'flex', 
        width:'100%', 
        height:50, 
        justifyContent: 'space-between', 
        flexDirection:'row',
        
        paddingHorizontal:13
    },
    buttonOptionMenuHeader: {
        flexDirection:'row',
        height: 50,
        justifyContent: 'space-evenly',
        alignItems:'center',
        
    }
})
export const styleListGroups = {
    wrapperItem:{
        width:'100%', 
        minHeight:120, 
        padding:10, 
        borderRadius:15, 
        flexDirection:'row',
        marginTop:8,
    },
    imageGroupItem:{
        width:80, 
        height:80, 
        borderRadius:100
    },
    wrapperInfoItemGroup:{
        flex: 1,
        flexDirection:'column', 
        paddingLeft:5
    },
    avatarListItemGroup: {
        resizeMode: 'contain', 
        width:40, 
        height:40, 
        borderWidth:2, 
        borderRadius:40,
        marginLeft:-10
    }
}
export const  stylesChat = {
    buttonSendMessage: {
        width:50,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 100,
        overflow:'hidden',
    },
    bgSendMessage: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        width:'100%',
        height:'100%',
        borderRadius: 20,
    },
    wrapperItemMessage:{
        width:'100%', 
        height:'auto', 
        flexDirection:'row',
        paddingVertical:5,
        alignItems: 'center'
    },
    wrapperItemMessageSended:{
        width:'100%', 
        height:'auto', 
        flexDirection:'row',
        paddingVertical:5,
        justifyContent:'flex-end'
    },
    avatar:{
        width:50, 
        height:50, 
        borderRadius:50,
        marginRight:2
    },
    wrapperMessage:{
        maxWidth:'80%',
        justifyContent:'center', 
        flexDirection:'column'
    },
    authorMessage:{
        fontWeight:'bold',
        fontSize:12, 
        color:COLORS_APP.black2
    },
    wrapperTextRecibed:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        alignItems: 'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:5,
        overflow: 'hidden',
        position:'relative', 
        display:'flex',
        marginTop:25
    },
    wrapperTextSended:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        alignItems: 'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:5,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        overflow: 'hidden',
        position:'relative', 
        display:'flex'
    },
    bgMessage:{
        width:'100%', 
        height:'100%', 
        position:'absolute',
        top:0, 
        right:0
    },
    bgMessageRecived:['#EEEEEC','#D5D4D0'],
    bgMessageSended:['#49B6DA','#0ACFFE'],

}