import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, Platform, Alert, SafeAreaView, ImageBackground } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";

export default function Home(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;


    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.slider_unfill);
        StatusBar.setTranslucent(false);
    })

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.container}
                source={IMAGES.backgroundHome}
                resizeMode="cover">
                <View style={styles.headerView}>
                    <Text
                        style={{ alignSelf: 'center' }}
                        color={COLORS.black}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('Rust')}
                    </Text>
                    <Image style={styles.imgDropDown} source={IMAGES.dropdown} />
                    <View style={styles.innerView}>
                        <View style={[styles.maskView, { backgroundColor: COLORS.white }]}>
                            <Image style={styles.maskIcon} resizeMode="contain" source={IMAGES.leaderboardFill} />
                            <Text
                                style={{ marginLeft: SCALE_SIZE(4) }}
                                color={COLORS.primary}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(10)}>
                                {getTranslation('Go Pro')}
                            </Text>
                        </View>
                        <View style={styles.maskView}>
                            <Image style={styles.maskIcon} resizeMode="contain" source={IMAGES.mask} />
                            <Text
                                style={{ marginLeft: SCALE_SIZE(4) }}
                                color={COLORS.primary}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(10)}>
                                {'12,00'}
                            </Text>
                        </View>
                        <Image style={[styles.imgDropDown, { marginTop: SCALE_SIZE(0) }]} resizeMode="contain" source={IMAGES.noti} />
                    </View>
                </View>
                <View style={styles.devider}/>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    headerView: {
        flexDirection: 'row',
        height: SCALE_SIZE(54),
        paddingHorizontal: SCALE_SIZE(16),
    },
    imgDropDown: {
        height: 24,
        width: 24,
        alignSelf: 'center',
        marginTop: SCALE_SIZE(4),
        marginHorizontal: SCALE_SIZE(4)
    },
    innerView: {
        flex: 1.0,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    maskView: {
        borderWidth: 2,
        borderColor: COLORS.white,
        marginRight: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(6),
        paddingHorizontal: SCALE_SIZE(8),
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: SCALE_SIZE(32)
    },
    maskIcon: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16)
    },
    devider: {
        marginTop:SCALE_SIZE(4),
        height: SCALE_SIZE(5),
        backgroundColor: COLORS.devider
    }
})