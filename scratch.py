import time

def first():
    print('Start')
    time.sleep(3)
    print('This is the first')
    print('End')

def second():
    print('This is the second')


# first()
# second()


def download_song(song_name):
    print(f'Downloading {song_name}...')
    time.sleep(3)
    return {'song': song_name, 'artist': 'Beyonce'}

def play_song(song_name):
    song = download_song(song_name)
    print(f"{song['song']} by {song['artist']} is playing...")


play_song('Halo')


