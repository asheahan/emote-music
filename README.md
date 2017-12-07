# Emotify

This project uses the Microsoft Cognitive Services [Emotion API](https://azure.microsoft.com/en-us/services/cognitive-services/emotion/) to take an image of a human face and generate a [Spotify](https://www.spotify.com/) playlist based on the emotion expressed in the image.

See it live at [https://emotify-music.herokuapp.com](https://emotify-music.herokuapp.com).

## About

This project was built using a Node.js backend API that calls both the Microsoft and Spofity API's. The frontend was created in the Vue.js framework with the Material Design-based Vuetify CSS framework.

## Workflow

A user first uploads an image. This image is then passed to the Emotion API for analysis (including finding the face in the image and determining factors indicative of emotions). The API returns scores for each emotional attribute.

Using these scores, a D3 radar chart is generated to show the emotion scores across all the attributes.

![picture scores](screenshots/picture-emotion-scores-example.PNG)

At this point, a user can choose to generate a Spotify playlist using the attribute scores as a basis for songs.

![playlist](screenshots/spotify-playlist-example.PNG)

