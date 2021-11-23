import { CardAnimationContext } from '@react-navigation/stack';
import React, { useState } from 'react'
import { ActivityIndicatorBase, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Textapp } from './Textapp';
import {Card, Avatar} from 'react-native-paper';

export const CalendarApp = () => {
    const [items, setItems] = useState({})
    const date = new Date()

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems)
        }, 1000);
    }

    const renderItem = (item) => {

        return (
        <TouchableOpacity style = {{marginRight: 10, marginTop: 17}}>
            <Card.Content>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Textapp text={item.name}/>
                    <Avatar.Text label = 'J'/>
                </View>
            </Card.Content>
        </TouchableOpacity>)
    }
    return (
        <View style={{flex: 1}}>
            <Agenda
            // The list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key has to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            items={items}
            // items={{
            //     '2021-11-22': [{name: 'item 1 - any js object'}],
            //     '2021-11-23': [{name: 'item 2 - any js object', height: 80}],
            //     '2021-11-24': [],
            //     '2021-11-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
            // }}
            // Callback that gets called when items for a certain month should be loaded (month became visible)
            loadItemsForMonth={loadItems}
            // Callback that fires when the calendar is opened or closed
            // onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
            // // Callback that gets called on day press
            // onDayPress={(day) => {console.log('day pressed', day)}}
            // // Callback that gets called when day changes while scrolling agenda list (NO LE ENTIENDO JSJS)
            // onDayChange={(day) => {console.log('day changed', day)}}
            // Initially selected day
            selected={date}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // minDate={'2022-01-01'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            // maxDate={'2012-05-30'}
            // Max amount of months allowed to scroll to the past. Default = 50
            // pastScrollRange={1}
            // // Max amount of months allowed to scroll to the future. Default = 50
            // futureScrollRange={50}
            // // Specify how each item should be rendered in agenda
            // renderItem={(item, firstItemInDay) => {return (<View style={{width: '100%',height: '100%',backgroundColor: 'yellow'}}/>);}}
            // // Specify how each date should be rendered. day can be undefined if the item is not first in that day
            renderItem={renderItem}
            // // Specify how empty date content with no items should be rendered
            // renderEmptyDate={() => {return (<View style={{width: '100%',height: '100%',backgroundColor: 'red'}}/>);}}
            // // Specify how agenda knob should look like
            // renderKnob={() => {return (<View style={{width: '100%',height: '100%',backgroundColor: 'green'}}/>);}}
            // // Specify what should be rendered instead of ActivityIndicator
            // renderEmptyData = {() => {return (<View style={{width: '100%',height: '100%',backgroundColor: 'black'}}/>);}}
            // // Specify your item comparison function for increased performance
            // rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
            // // Hide knob button. Default = false
            // // hideKnob={true}
            // // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
            // // showClosingKnob={false}
            // // By default, agenda dates are marked if they have at least one item, but you can override this if needed
            // markedDates={{
            //     '2021-11-19': {selected: true, marked: true},
            //     '2021-11-20': {marked: true},
            //     '2021-11-21': {disabled: true}
            // }}
            // // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
            // // disabledByDefault={true}
            // // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
            // onRefresh={() => console.log('refreshing...')}
            // // Set this true while waiting for new data from a refresh
            // refreshing={false}
            // // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
            // refreshControl={null}
            // // Agenda theme
            // theme={{
            //     // ...calendarTheme,
            //     agendaDayTextColor: 'yellow',
            //     agendaDayNumColor: 'green',
            //     agendaTodayColor: 'red',
            //     agendaKnobColor: 'blue'
            // }}
            // // Agenda container style
            // style={{}}
        />
        </View>
    )
}
