import React, { Component } from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
    
    
const response={data:[{
  "time": "08:00",
  "date": "2022-6-30",
  "event": 'booking',
  "place": 'Indianapolis,USA',
  }, {
  "time": "16:30",
  "date": "2022-6-30",
  "event": 'booking',
  "place": 'Indianapolis,USA',
  },   {
  "time": "19:50",
  "date": "2022-8-22",
  "event": 'booking',
  "place": 'Indianapolis,USA',
  },
   {
  "time": "20:50",
  "date": "2022-8-22",
  "event": 'booking',
  "place": 'Indianapolis,USA',
  },
   {
  "time": "9:50",
  "date": "2022-8-23",
  "event": 'booking',
  "place": 'Indianapolis,USA',
  },
  ]};
  
const res=response.data.slice(0).sort((b,a)=>
a.date.localeCompare(b.date)||a.time.localeCompare(b.time));
const Item = ({time,date,event,place}) => {
  let today=new Date()
  let todate=(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
  let totime=today.getHours()
  if(todate==date&& totime==time.split(':')[0]&&today.getMinutes()<=time.split(':')[1]){
  return( 
    <View style={styles.item1}>
      <Text>{time}</Text>
       <Text>{date}</Text>
       <Text>{event}</Text>
       <Text>{place}</Text>
    </View>
  );
  }
  else{
    return( 
    <View style={styles.item}>
      <Text>{time}</Text>
       <Text>{date}</Text>
       <Text>{event}</Text>
       <Text>{place}</Text>
    </View>
  );
  }
}
const renderItem = ({item})=>( 
  <Item time={item.time} date={item.date} event={item.event} place={item.place}/>
);
export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding:2,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item1: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
