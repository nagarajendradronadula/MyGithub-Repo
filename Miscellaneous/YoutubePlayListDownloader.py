# from pytube import Playlist

# p = Playlist("https://youtube.com/playlist?list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl&si=VGppFY6L8nd0L8aV")

# for video in p.videos:
#     video.streams.first().download()

from pytube import YouTube
from pytube.request import get

# Set custom User-Agent
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

# Download video
yt = YouTube('https://youtube.com/playlist?list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl&si=VGppFY6L8nd0L8aV')
yt.streams.first().download()