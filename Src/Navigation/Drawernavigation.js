import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Drawernavigation = ({ navigation, visible, onClose }) => {
    const handleContainerPress = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPress={handleContainerPress}
            >
                <View style={styles.drawerContainer}>
                    {/* <ScrollView> */}
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../Assets/profile.jpg')}
                            style={styles.profileImage}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text>Oliver Thomas</Text>
                            <Text>1</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                    {/* <ScrollView> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../Assets/ic_home.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Home</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_user.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Profile</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/medical_appointment.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>My Appointments</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_opd_new.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>OPD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_ipd.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>IPD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_pharmacy_new.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Pharmacy</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../Assets/ic_pathology_new.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Pathology</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_radiology_new.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Radiology</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_ambulance_new.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Ambulance</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_bloodbank_new.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Blood Bank</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_vedio.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Live Consultation</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 25, width: 25 }} source={require('../Assets/ic_nav_about.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>About Hospital</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../Assets/ic_nav_logout.png')} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10 }}>Logout</Text>
                    </View>
                    {/* </ScrollView> */}
                </View >
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    drawerContainer: {
        backgroundColor: 'white',
        width: windowWidth / 1.5,
        height: '100%',
        // position: 'absolute',
        // bottom: 0,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        padding: 10
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        marginHorizontal: 20,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileInfo: {
        marginLeft: 20,
    },
    profileName: {
        fontSize: 18,
        fontFamily: 'NunitoSans_7pt-Bold'
    },
    name: {
        fontSize: 15,
        fontFamily: 'NunitoSans_7pt-Regular'
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        marginHorizontal: 20,
        paddingTop: 20,
    },
    contentContainer: {
        padding: 20,
    },
    itemContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    text1: {
        fontSize: 16,
        fontFamily: 'NunitoSans_7pt-Regular'
    },
    searchInput: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        fontFamily: 'NunitoSans_7pt-Regular'
    },
});

export default Drawernavigation;