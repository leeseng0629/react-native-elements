import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

class InputWithLabel extends Component {
    constructor(props) {
        super(props);

        this.orientation = this.props.orientation ? (this.props.orientation == 'horizontal' ? 'row' : 'column') : 'column';
    }

    render() {
        return (
            <View style={[inputStyles.container, {flexDirection: this.orientation}]}>
                <Text style={inputStyles.label}>
                    {this.props.label ? this.props.label : ''}
                </Text>
                <TextInput style={[inputStyles.input, this.props.style]}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    multiline={this.props.multiline ? this.props.multiline : false}
                    keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                    secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
                    selectTextOnFocus={this.props.selectTextOnFocus ? this.props.selectTextOnFocus : false}
                    editable={this.props.editable !== null ? this.props.editable : true}
                />
            </View>
        )
    }
}

const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 3,
        textAlignVertical: 'center',
    },
    input: {
        flex: 3,
        fontSize: 20,
    }
});