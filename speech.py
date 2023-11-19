import speech_recognition

recognizer = speech_recognition.Recognizer()

while True:
    try:
        with speech_recognition.Microphone() as mic:
            recognizer.adjust_for_ambient_noise(mic, duration=0.2)
            audio = recognizer.listen(mic)
            
            text = recognizer.recognize_google(audio)
            text = text.lower()
            
            # Save the recognized text to a file
            with open("recognized_speech.txt", "a") as file:
                file.write(f"Recognized: {text}\n")
            
            print(f"Recognized: {text}")

    except speech_recognition.UnknownValueError:
        print("Could not understand audio")

    except speech_recognition.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")

    except KeyboardInterrupt:
        break
