from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import os,requests

# Create your views here.
def home(request):
    #return render(request,"home.html")
    return render(request,"index.html")

def post(request):
    if request.method == "POST":
           msg = request.POST['msgbox']
           #msg = request.POST.get("msgbox")
           try:
               response = requests.get('http://api.stackexchange.com/2.2/tags/' + msg + '/wikis?site=stackoverflow')
               data = response.json()
               #print(data)
               return JsonResponse({'msg': msg, 'bot': data['items'][0]['excerpt']})
           except:
               pass
           return JsonResponse({'msg': msg, 'bot':'check the spelling'})

    else:
          return HttpResponse('Request must be post.')
