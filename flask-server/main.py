# from flask import Flask, jsonify , request
# from flask_cors import CORS
# import json
# #from gevent.pywsgi import WSGIServer

# import nltk
# nltk.download('popular')
# from nltk.stem import WordNetLemmatizer
# lemmatizer = WordNetLemmatizer()
# import pickle
# import numpy as np
# from keras.models import load_model
# model = load_model('chatbotmodel.h5')
# import json
# import random
# intents = json.loads(open('intents.json').read())
# words = pickle.load(open('words.pkl','rb'))
# classes = pickle.load(open('classes.pkl','rb'))

# def clean_up_sentence(sentence):
#     # tokenize the pattern - split words into array
#     sentence_words = nltk.word_tokenize(sentence)
#     # stem each word - create short form for word
#     sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
#     return sentence_words
# # return bag of words array: 0 or 1 for each word in the bag that exists in the sentence
# def bow(sentence, words, show_details=True):
#     # tokenize the pattern
#     sentence_words = clean_up_sentence(sentence)
#     # bag of words - matrix of N words, vocabulary matrix
#     bag = [0]*len(words)  
#     for s in sentence_words:
#         for i,w in enumerate(words):
#             if w == s: 
#                 # assign 1 if current word is in the vocabulary position
#                 bag[i] = 1
#                 if show_details:
#                     print ("found in bag: %s" % w)
#     return(np.array(bag))
# def predict_class(sentence, model):
#     # filter out predictions below a threshold
#     p = bow(sentence, words,show_details=False)
#     res = model.predict(np.array([p]))[0]
#     ERROR_THRESHOLD = 0.25
#     results = [[i,r] for i,r in enumerate(res) if r>ERROR_THRESHOLD]
#     # sort by strength of probability
#     results.sort(key=lambda x: x[1], reverse=True)
#     return_list = []
#     for r in results:
#         return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
#     return return_list
# def getResponse(ints, intents_json):
#     tag = ints[0]['intent']
#     list_of_intents = intents_json['intents']
#     for i in list_of_intents:
#         if(i['tag']== tag):
#             result = random.choice(i['responses'])
#             break
#     return result
# def chatbot_response(msg):
#     ints = predict_class(msg, model)
#     res = getResponse(ints, intents)
#     return res



# app=Flask(__name__)
# CORS(app)  

# # member api route
# @app.route("/members",methods=["GET","POST"]) 
# def get_bot_response():
#     if request.method == "POST":
#         userText = json.loads(request.data)
#         response=chatbot_response(userText["inputText"])
#         return {"message":response}


# if __name__=="__main__":
#     # http_server = WSGIServer(('', 5000), app)
#     # http_server.serve_forever()
#     app.run(debug=True)

 
 


from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import nltk
from nltk.stem import WordNetLemmatizer
import pickle
import numpy as np
from keras.models import load_model
import random

app = Flask(__name__)
CORS(app)

# Load the chatbot model and data
lemmatizer = WordNetLemmatizer()
model = load_model('chatbotmodel.h5')
intents = json.loads(open('intents.json').read())
words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))

# Store recognized speech words
recognized_speech = []


def clean_up_sentence(sentence):
    # tokenize the pattern - split words into an array
    sentence_words = nltk.word_tokenize(sentence)
    # stem each word - create a short form for the word
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words


def bow(sentence, words, show_details=True):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words - matrix of N words, vocabulary matrix
    bag = [0] * len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                # assign 1 if the current word is in the vocabulary position
                bag[i] = 1
                if show_details:
                    print("found in bag: %s" % w)
    return np.array(bag)


def predict_class(sentence, model):
    # filter out predictions below a threshold
    p = bow(sentence, words, show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    # sort by the strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list


def getResponse(ints, intents_json):
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result


def chatbot_response(msg):
    ints = predict_class(msg, model)
    res = getResponse(ints, intents)
    return res


@app.route("/members", methods=["POST"])
def get_bot_response():
    if request.method == "POST":
        user_text = json.loads(request.data)
        recognized_speech.append(user_text["inputText"])
        response = chatbot_response(user_text["inputText"])
        return {"message": response}


@app.route("/get_recognized_speech", methods=["GET"])
def get_recognized_speech():
    return jsonify({"recognized_speech": recognized_speech})


if __name__ == "__main__":
    app.run(debug=True)
