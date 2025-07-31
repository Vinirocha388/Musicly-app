import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Audio from 'expo-audio';

export default function App() {
  const [bpm, setBpm] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const soundRef = useRef(null);

  useEffect(() => {
        const loadSound = async () => {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    require('./assets/tick.mp3'),
                    { shouldPlay: false }
                );
                soundRef.current = sound;
            } catch (error) {
                console.error('Erro ao carregar som:', error);
            }
        };

        loadSound();
        return () => {
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        };
    }, []);

  const playTick = async () => {
    try {
      const sound = soundRef.current;
      if (!sound) return;
      await sound.replayAsync();
    } catch (error) {
      console.warn('Erro ao tocar som:', error);
    }
  };

  const startMetronome = () => {
    const interval = (60 / bpm) * 1000;
    playTick(); // toca o primeiro imediatamente
    intervalRef.current = setInterval(() => {
      playTick();
    }, interval);
    setIsPlaying(true);
  };

  const stopMetronome = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
  };

  const toggleMetronome = () => {
    if (isPlaying) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };

  const increaseBpm = () => {
    if (bpm < 300) setBpm((prev) => prev + 1);
  };

  const decreaseBpm = () => {
    if (bpm > 20) setBpm((prev) => prev - 1);
  };

  useEffect(() => {
    if (isPlaying) {
      stopMetronome();
      startMetronome();
    }
  }, [bpm]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metrônomo</Text>

      <Text style={styles.bpmText}>{bpm} BPM</Text>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.bpmButton} onPress={decreaseBpm}>
          <Text style={styles.bpmButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bpmButton} onPress={increaseBpm}>
          <Text style={styles.bpmButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.startButton, isPlaying && { backgroundColor: '#991b1b' }]}
        onPress={toggleMetronome}
      >
        <Text style={styles.startButtonText}>{isPlaying ? 'Parar' : 'Iniciar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  bpmText: { fontSize: 40, fontWeight: 'bold', marginVertical: 10 },
  controls: { flexDirection: 'row', marginBottom: 30 },
  bpmButton: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  bpmButtonText: { fontSize: 24, color: 'white', fontWeight: 'bold' },
  startButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  startButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
