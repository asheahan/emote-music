# Emote Music

This project uses the Microsoft Cognitive Services [Emotion API](https://azure.microsoft.com/en-us/services/cognitive-services/emotion/) to take an image of a human face and generate a [Spotify](https://www.spotify.com/) playlist based on the emotion expressed in the image.

### Workflow

A user first uploads an image. This image is then passed to the Emotion API for analysis (including finding the face in the image and determining factors indicative of emotions). The API returns scores for each emotional attribute.

Using these scores, a D3 radar chart is generated to show the emotion scores across all the attributes.

![picture scores][https://github.com/asheahan/emote-music/raw/master/screenshots/picture-emotion-scores-example.PNG]

At this point, a user can choose to generate a Spotify playlist using the attribute scores as a basis for songs.

![alt text][screenshots/spotify-playlist-example.PNG]

