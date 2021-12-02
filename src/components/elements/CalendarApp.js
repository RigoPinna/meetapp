import { CardAnimationContext } from '@react-navigation/stack';
import React, { useState } from 'react'
import { ActivityIndicatorBase, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



export const CalendarApp = () => {
    const date = new Date()
    const [selected, setSelected] = useState(date);
    const RANGE = 24;
  const markedDates = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
      selectedColor: '#5E60CE',
      selectedTextColor: 'white'
    }
  };
  const onDayPress = day => {
    setSelected(day.dateString);
  };

    return (
        <View style={{flex: 1}}>
            <CalendarList
    //   testID={testIDs.calendarList.CONTAINER}
      current={date}
      pastScrollRange={RANGE}
      futureScrollRange={RANGE}
    //   renderHeader={renderCustomHeader}
    //   theme={theme}
      onDayPress={onDayPress}
      markedDates={markedDates}
    />

        </View>
    )
}
