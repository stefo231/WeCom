import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import Scr1 from '../scroller/Scr1'
import Scr2 from '../scroller/Scr2'
import Scr3 from '../scroller/Scr3'
import Scr4 from '../scroller/Scr4'

class Scroller extends Component {

  render() {

    return (

      
   

        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          
          <Scr1 />
          <Scr2 />
          <Scr3 />
          <Scr4 />
         
        </ScrollView>
      
    )
  }
}

export default Scroller

