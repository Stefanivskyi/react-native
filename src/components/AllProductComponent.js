import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import ProgressPage from '../components/ProgressBar';


const renderList = (foods) => {
  if (foods.length) {
    return foods.map(
        (food, i) =>
            <View style={styles.listContainer} key={i}>
              <Image
                  style={{ width: 110, height: 110 }}
                  source={{ uri: 'http://poshgroup.com.ua/files/products/vanity_daa44125_sira_pol_620027.284x211.jpg' }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.listTitle}>{food.title}</Text>
                {/*<Text style={styles.listDesc}>{food.desc}</Text>*/}
                <View style={styles.listDateContainer}>
                  <Text style={styles.listDate}>{food.datepick} ----</Text>
                  <Text style={styles.listExpDate}>{food.expdatepick}</Text>
                </View>
                <Text style={styles.listDays}>{food.days / 24}</Text>
                <ProgressPage progress={food.days} style={styles.listProgress}/>
              </View></View>
    );
  }

  return <Text>Loading...</Text>
}

const AllProductsComponent = ({ foods }) => (
    <View style={styles.container}>
      {renderList(foods)}
    </View>
)

AllProductsComponent.defaultProps = {
  foods: []
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'

  },
  listTitle: {
    color: 'black',
    fontSize: 24,
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 10
  },
  listDate: {
    fontSize: 11,
    flexDirection: 'column'
  },
  listExpDate: {
    fontSize: 11,
    flexDirection: 'column'
  },
  listDays: {
    width: 50,
    fontSize: 24,
    color: '#000000',
    position: 'absolute',
    right: 0,
    top: '30%',
    textAlign: 'center'

  },
  listDateContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: 56
  },
  listProgress: {
    marginTop: 10
    //flexWrap: 'wrap',
    //alignItems: 'flex-start',
    //flexDirection:'column',
  }
});

export default AllProductsComponent;
