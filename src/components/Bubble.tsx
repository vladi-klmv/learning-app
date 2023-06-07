import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, Dimensions, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text } from '../components'

export default function Bubble(props: any) {

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} resizeMode="contain" source={IMAGES.learning} />
                <View style={styles.descriptionItem}>
                    <Text
                        color={COLORS.questionColor}
                        fontFamily={FONT.semiBold}
                        size={SCALE_SIZE(14)}>
                        {props.title}
                    </Text>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16),
        marginVertical: SCALE_SIZE(32)
    },
    image: {
        width: SCALE_SIZE(96),
        height: SCALE_SIZE(56)
    },
    descriptionItem: {
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderTopLeftRadius: SCALE_SIZE(8),
        borderTopRightRadius: SCALE_SIZE(8),
        borderBottomLeftRadius: SCALE_SIZE(0),
        borderBottomRightRadius: SCALE_SIZE(8),
        backgroundColor: COLORS.white,
        elevation: 2,
        position: 'absolute',
        bottom: SCALE_SIZE(66),
        left: SCALE_SIZE(72)
    }
})