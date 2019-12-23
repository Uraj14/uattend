import React, { Component } from "react";
import {
    Alert,
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",

    },
    welcomeText: {
        fontSize: 20,
        margin: 5,
        textAlign: "center",
    },
    exampleText: {
        fontSize: 20,
        marginBottom: 25,
        textAlign: "center",
    },
    instructionsText: {
        color: "#333333",
        fontSize: 16,
        marginBottom: 40,
        textAlign: "center",
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '50%'
    },
    button:{
        width: '160%',
        height: 40,
        marginLeft: '10%',
    },
    input: {
        margin: 8,
        height: 40,
        borderColor: '#005aa7',
        borderWidth: 1,
     },
     reason: {
         color: '#005aa7',
         marginLeft: '2%'
     },
     cancel:{
        color: '#005aa7',
        marginLeft: '2%',
        marginBottom: '8%'
     },
     cancel1:{
        color: '#cb5a64',
        marginLeft: '2%',
        marginBottom: '2%',
        // fontWeight: '1000'
     },
     cancel2:{
        color: '#c94b4b',
        marginLeft: '2%',
        marginBottom: '2%'
     }
});

LocaleConfig.locales['en'] = {
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'],
    dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    dayNamesShort: ['Sun.','Mon.','Tues.','Wed.','Thurs.','Fri.','Sat.'],
    today: 'Aujourd\'hui'
  };
  
  const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
  const working = {key:'working', color: 'green'};
  
  LocaleConfig.defaultLocale = 'en';
  

var radio_props = [
    {label: 'Take Leave', value: 0 },
    {label: 'Work From Home', value: 1 }
];
    
var todayDate = new Date();
var todayDateForCompare = parseInt(todayDate.getFullYear()+""+parseInt(todayDate.getMonth()+1,10)+""+todayDate.getDate(),10);


export default class Dashboard extends Component {
    state = {
        selDate: null,
        selDateForCompare: null,
        selDay: null,
        showDialog: false,
        value: 0,
        reason: null,
        marked: {
            '2019-12-28': {
              customStyles: {
                container: {
                  backgroundColor: '#eb3548'
                },
                text: {
                  color: 'white',
                  fontWeight: 'bold'
                },
              },
            },
            '2019-12-29': {
              customStyles: {
                container: {
                  backgroundColor: '#6aab7d',
                  elevation: 2
                },
                text: {
                  color: 'white'
                },
              }
            }
          },
          leaveData: {
            '2019-12-29':{
                type:'wfh',
                reason: 'Not feeling Well'
            },
            '2019-12-28':{
                type:'leave',
                reason: 'sick leave'
            }
          }
    };

    openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    handleCancel = (show) => {
        
        this.openDialog(show)
    };
     
    handleSubmit = async(show) => {
        var leave = {
            customStyles: {
                container: {
                  backgroundColor: '#eb3548',
                  elevation: 2
                },
                text: {
                    color: 'white',
                    fontWeight: 'bold'
                },
              }
        }
        var wfh = {
            customStyles: {
                container: {
                  backgroundColor: '#6aab7d',
                  elevation: 2
                },
                text: {
                  color: 'white'
                },
              }
        }
        var selDate = this.state.selDate;
        var newValue = {}
        var newLeaveData = {}

        if(this.state.value === 0){
            newValue[selDate] = leave
            newLeaveData[selDate]= {
                type: 'leave',
                reason: this.state.reason
            }

        }else if(this.state.value === 1){
            newValue[selDate] = wfh
            newLeaveData[selDate]= {
                type: 'wfh',
                reason: this.state.reason
            }
        }
        
        var marked = {...this.state.marked}
        var leaveData = {...this.state.leaveData}
        await this.addLeaveData(leaveData,newLeaveData);
        await this.addElement(marked,newValue,show)
    };

    handleReason = async(e) => {
        await this.setState({reason: e})
    }

    handleDayPressed(date){
        var selectedDate = String(date.year+"-"+date.month+"-"+date.day)
        var tempDate = String(date.year+""+""+date.month+""+""+date.day);
        var curDateForCompare = parseInt(tempDate,10);
        this.setState({selDateForCompare: curDateForCompare})
        this.setState({selDate: selectedDate})
        this.setState({selDay: date.day})
        this.openDialog(true);
   }


    addElement(ElementList, element,show) {
        let newList = Object.assign(ElementList, element)
        this.setState({marked: newList})
        this.openDialog(show)
    }

    addLeaveData(ElementList,element){
        let newList = Object.assign(ElementList, element)
        this.setState({leaveData: newList})
    }

    cancelLeave = (show) =>{
        var marked = {...this.state.marked};
        delete marked[this.state.selDate];
        this.setState({marked: marked});
        this.openDialog(show);
    }

   

    render() {
        // console.log(this.state.selDateRaw)
        return (
            <View style={ styles.container }>

             <Calendar style={{width: '80%', height: '50%'}}
            markingType={'custom'}
            markedDates={this.state.marked}

            onDayPress = {(date) => this.handleDayPressed(date)}

            />

                <View>
                    {this.state.selDateForCompare >= todayDateForCompare ?

                    <View>
                        {this.state.marked[this.state.selDate] === undefined ? 

                        <Dialog
                        title="Take Action"
                        animationType="fade"
                        contentStyle={
                            {
                                // alignItems: "center",
                                // justifyContent: "space-between",
                            }
                        }
                        onTouchOutside={ () => this.openDialog(false) }
                        visible={ this.state.showDialog }
                        >
                        <View>
                            <RadioForm style={{marginBottom: '5%'}}
                            radio_props={radio_props}
                            initial={0}
                            buttonColor={'#ffb0bb'}
                            animation={true}
                            buttonSize={10}
                            buttonOuterSize={20}
                            onPress={(value) => {this.setState({value:value})}}
                            />
                            <Text style={styles.reason}>
                                {'Reason: '}
                            </Text>
                            <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Your reason"
                            placeholderTextColor = "grey"
                            autoCapitalize = "none"
                            onChangeText = {this.handleReason}>

                            </TextInput>
                    
                        </View>
                        
                        
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button}
                                onPress={ () => this.handleCancel(false) }
                                style={ { marginTop: 10 } }
                                title="CANCEL"
                            />
                            <Button style={styles.button}
                                onPress={ () => this.handleSubmit(false) }
                                style={ { marginTop: 10 } }
                                title="SUBMIT"
                            />
                        </View>
                    
                        </Dialog> 


                        :

                        <Dialog
                        title="Cancel Your Leave? "
                        animationType="fade"
                        contentStyle={
                            {
                                // alignItems: "center",
                                // justifyContent: "space-between",
                            }
                        }
                        onTouchOutside={ () => this.openDialog(false) }
                        visible={ this.state.showDialog }
                        >
                        <View>
                            {/* <RadioForm style={{marginBottom: '5%'}}
                            radio_props={radio_props}
                            initial={0}
                            buttonColor={'#ffb0bb'}
                            animation={true}
                            buttonSize={10}
                            buttonOuterSize={20}
                            onPress={(value) => {this.setState({value:value})}}
                            /> */}
                            <Text style={styles.cancel1}>
                                {'Current Leave Status'}
                            </Text>
                            <Text style={styles.cancel2}>
                                {'Leave Type: '+" "+this.state.leaveData[this.state.selDate].type}
                            </Text>
                            <Text style={styles.cancel}>
                                {'Reason Specified: '+" "+this.state.leaveData[this.state.selDate].reason}
                            </Text>
                            {/* <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Your reason"
                            placeholderTextColor = "grey"
                            autoCapitalize = "none"
                            onChangeText = {this.handleReason}>

                            </TextInput> */}
                    
                        </View>
                        
                        
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button}
                                onPress={ () => this.handleCancel(false) }
                                style={ { marginTop: 10 } }
                                title="CANCEL"
                            />
                            <Button style={styles.button}
                                onPress={ () => this.cancelLeave(false) }
                                style={ { marginTop: 10 } }
                                title="SUBMIT"
                            />
                        </View>
                    
                    </Dialog> 
                    }

                    </View>
                : 
                null
                }
                </View>

            </View>
        );
    }
}
