import React, { Component } from 'react';
import { View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
    state = { term: '' };
    render() { 
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    style={styles.searchTextStyle}
                    onChangeText={ term => this.setState({ term })}
                    value={this.state.term}
                />
                <Button
                    buttonStyle={styles.buttonStyle}
                    title={this.props.loading ? 'Loading...' : 'Search'}
                    onPress={() => this.props.onPressSearch(this.state.term)}
                />
            </View> 
        );
    }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  searchTextStyle: {
    flex: 1,
    backgroundColor: '#ddd',
    borderColor: 'white',
    height: 40,
    marginLeft: 5,
    fontSize: 20
  },
  buttonStyle: {
    height: 40,
    marginBottom: 8,
    backgroundColor: '#ddd',
  }
};

export default SearchBar;


