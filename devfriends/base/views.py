from django.shortcuts import render

# Create your views here.

rooms = [
    {'id': 1, 'name': 'Python'},
    {'id': 1, 'name': 'HTML'},
    {'id': 1, 'name': 'JavaScript'},

]


def home(request):
    return render(request, 'base/home.html', {'rooms': rooms})


def room(request):
    return render(request, 'base/room.html')
