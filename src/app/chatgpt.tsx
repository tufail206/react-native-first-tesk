import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi! How can I help you today?', sender: 'ai' },
        { id: 2, text: 'Explain React Native in simple words', sender: 'user' },
        { id: 3, text: 'React Native lets you build mobile apps using JavaScript and React. It turns your code into real Android and iOS apps.', sender: 'ai' },
    ]);

    const sendMessage = () => {
        if (input.trim() === '') return;

        const newMessage = {
            id: messages.length + 1,
            text: input,
            sender: 'user'
        };

        setMessages([...messages, newMessage]);
        setInput('');

        // Fake AI reply
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: prev.length + 1,
                text: 'Got it! This is a demo reply.',
                sender: 'ai'
            }]);
        }, 800);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>ChatGPT</Text>
            </View>

            {/* Messages */}
            <ScrollView
                style={styles.chatArea}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {messages.map(msg => (
                    <View
                        key={msg.id}
                        style={[
                            styles.messageRow,
                            msg.sender === 'user' && styles.userRow
                        ]}
                    >
                        <View style={[
                            styles.messageBubble,
                            msg.sender === 'user' ? styles.userBubble : styles.aiBubble
                        ]}>
                            <Text style={styles.messageText}>{msg.text}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Input Bar */}
            <View style={styles.inputBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Message ChatGPT"
                    placeholderTextColor="#8E8E8E"
                    value={input}
                    onChangeText={setInput}
                    multiline
                />
                <TouchableOpacity
                    style={[styles.sendBtn, input.trim() === '' && styles.sendBtnDisabled]}
                    onPress={sendMessage}
                    disabled={input.trim() === ''}
                >
                    <Text style={styles.sendText}>↑</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },
    header: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#2F2F2F',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    chatArea: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    messageRow: {
        marginBottom: 15,
        flexDirection: 'row',
    },
    userRow: {
        justifyContent: 'flex-end',
    },
    messageBubble: {
        maxWidth: '80%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 18,
    },
    aiBubble: {
        backgroundColor: '#2F2F2F',
    },
    userBubble: {
        backgroundColor: '#3E3E3E',
    },
    messageText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 22,
    },
    inputBar: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#2F2F2F',
        backgroundColor: '#212121',
        alignItems: 'flex-end',
    },
    input: {
        flex: 1,
        backgroundColor: '#2F2F2F',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: '#FFFFFF',
        fontSize: 16,
        maxHeight: 120,
    },
    sendBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    sendBtnDisabled: {
        backgroundColor: '#555',
    },
    sendText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#212121',
    },
});