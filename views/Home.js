import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home(props)
{
    console.log(props)

    return(
        <View>
            <Text>Esse é o componente Home</Text>
            <Button 
                title='Ir para Login' 
                onPress={()=>props.navigation.navigate('Login', {
                    id:30}
                )} 
            />
        </View>
    )
}