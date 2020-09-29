from django.shortcuts import render

# Create your views here.

#クラスベースのビューを作るため
from django.views import View

#Viewを継承してGET文、POST文の関数を作る
class StaffView(View):

    def get(self, request, *args, **kwargs):


        return render(request,"staff/index.html")

    def post(self, request, *args, **kwargs):

        pass

index   = StaffView.as_view()


