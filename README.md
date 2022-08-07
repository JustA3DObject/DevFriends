# DevFriends

A chatting app for developers, programmers and coders.

## Features

- Explore different rooms and topics that people have creted and read the discussions in the rooms.
- Login/Signup to create your own rooms and chat with others in any room.
- Watch who posted what and where in the activities feed.
- Search by topics or rooms.
- See each other's profiles and a particular profile's activities and the rooms they created.
- Edit your profile and add avatars, email, bio etc to tell others about you.
- You can also lurk around without logging in.
- Call APIs to collect some data.

## API calls

These are the two links that you can access to make API calls:

1. {website URL}/rooms/ to get list of all the rooms with other details about them in Json format.
2. {website URL}/rooms/{room id} to get details about a particular room. Room ids can be found in the url bar when you visit a particular room or in the Json list of rooms if you fetch.

## Tools

- Django 4.0.6
- Python 3.10.4
- Django REST API Framework 3.13.1
- JavaScript
- CSS 3
- HTML 5

## How to copy this project and run it?

1. Install python 3.9 or above
2. Clone this repository using 
>git clone https://github.com/JustA3DObject/DevFriends.git
3. Install Anaconda from web
4. Clone the virtual environment using 
>conda env create --name envname -f environment.yml
5. Activate the virtual environment by 
>conda activate envname
6. If you don't want to use conda, create virtual environment using
>python -m venv ./venv(name) 
{Replace (name) with whatever suffix you want}
7. To activate environment via powershell type
>venv(name)/Script/activate.ps1
8. Install the dependencies using
>pip install -r requirements.txt
9. Create a django project using
>django-admin startproject projectname
and create the app using
>python manage.py startapp appname
10. Replace the default files with the favorable files from this repo except the security key in settings.py
11. Run the project using
>python manage.py runserver
