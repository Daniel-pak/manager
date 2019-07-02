import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
 
export default class ListItem extends Component {
    // onItemPress = () => Actions.employeeEdit({ employee: this.props.employee.item });
    // onPress={this.onItemPress}
    render() {
        const { name, phone } = this.props.employee.item;
 
        return (
            <TouchableWithoutFeedback>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                        <Text style={styles.titleStyle}>{phone}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
 
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};