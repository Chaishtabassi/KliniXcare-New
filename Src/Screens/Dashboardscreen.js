import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Header from '../Navigation/Header'
import { Calendar } from 'react-native-calendars';

const Dashboardscreen = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date());

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <ScrollView>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('../Assets/chat.png')}
                            style={styles.icon}
                        />
                        <View style={styles.cardText}>
                            <Text style={styles.cardHeading}>Notification</Text>
                            <Text style={styles.cardSubheading}>This Month</Text>
                        </View>
                        <Text style={styles.cardValue}>0</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('../Assets/medical_appointment.png')}
                            style={styles.icon}
                        />
                        <View style={styles.cardText}>
                            <Text style={styles.cardHeading}>My Appointments</Text>
                            <Text style={styles.cardSubheading}>This Month</Text>
                        </View>
                        <Text style={styles.cardValue}>0</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View style={styles.cardContent}>
                        <Image
                            source={require('../Assets/ic_dashboard_pandingtask.png')}
                            style={styles.icon}
                        />
                        <View style={styles.cardText}>
                            <Text style={styles.cardHeading}>Pending Task</Text>
                            <Text style={styles.cardSubheading}>Today</Text>
                        </View>
                        <Text style={styles.cardValue}>0</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ margin: 10,}}>

          <Calendar
            current={currentMonth}
            onMonthChange={(month) => setCurrentMonth(new Date(month.dateString))}
          />
        </View>

            </ScrollView>
        </View>
    )
}

export default Dashboardscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        margin: 8,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 33,
        height: 33,
        marginRight: 10,
    },
    cardText: {
        flex: 1,
        marginRight: 10,
    },
    cardHeading: {
        fontSize: 17,
        color: '#333333',
    },
    cardSubheading: {
        fontSize: 12,
        color: '#333333',
    },
    cardValue: {
        fontSize: 22,
        color: '#333333',
    },
});
