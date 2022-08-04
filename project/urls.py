"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.ViewAdminLogin),
    path('index/', views.openHome),
    path('about-us/', views.viewAbout),
    path('contact/', views.viewContact),
    path('gallery/', views.viewGallery),
    path('package/', views.viewPackage),
    path('schedule/', views.viewSchedule),
    path('login/', views.viewLogin),
    path('register/', views.viewRegister),
    path('video/', views.viewTrainerVideos),



#Admin Pages
    path('indexadmin/',views.adminIndexadmin),
    path('admin_master/',views.adminAddadmin),
    path('manage_master/',views.manageMaster),
    path('add_customer_details/',views.adminAddUserDetails),
    path('manage_customer_details/',views.manageCustomerDetails),
    path('add_health_status/',views.addHealthStatus),
    path('manage_health_status/',views.manageHealthStatus),
    path('addplan/',views.addPlan),
    path('manage_plan/',views.managePlan),
    path('admin_login/',views.ViewAdminLogin),
    path('event_management/',views.viewEventManagement),
    path('add_events/',views.viewAddEvents),
    path('product_management/',views.viewProductManagement),
    path('add_products/',views.viewAddProducts),
    path('equipment_management/',views.viewEquipmentManagement),
    path('add_equipments/',views.viewAddEquipments),










# Admin js files
    path('admin_details/', views.adminDetails),
    path('customer_details/',views.adminAddCustomers),
    path('add_health/',views.addHealth),
    path('plan_details/',views.planDetails),


# trainer
    path('index_trainer/',views.viewTrainer),
    path('add_customer_health/',views.viewTrainerHealth),
    path('manage_customer_health/',views.manageTrainerHealth),
    path('add_trainer_customer/',views.viewTrainerCustomer),
    path('manage_trainer_customer/',views.manageTrainercustomer),
    path('add_videos/',views.viewVideos),
    path('manage_videos/',views.viewManageVideos),
    path('diet_plan/',views.viewDietPlan),
    path('add_diet/',views.viewAddDietPlan),





    path('add_customer/',views.viewCustomer),
    path('customer_health/',views.viewCustomerHealth),
    path('videos/',views.UploadVideos),

    path('get_videos/',views.getVideos),
    path('get_package/',views.getPlan),
    path('add_register/', views.userRegister),
    path('user_login_validate/',views.userLoginValidate),



   path('admin_login_details/', views.checkAdminLogin, name='login'),
   
    path('check_web_login/', views.checkWebLogin, name='web_login'),


path('get_equipments/', views.getEquipments, name='equipments'),
path('get_Fitness_foods/', views.getFitnessFood, name='foods'),
path('get_Events/', views.getEvents, name='event'),
path('get_diet_plan/', views.getDietPlan, name='diet'),

   path("Customer_Buying/", views.viewCustomerBuying),
   path("diet_byure/", views.viewDietByure),
   path("pay_success/", views.viewPaySuccess),







   
    #  # admin
    # path('coordinator_details/', views.coordinatorDetails),
    # path('game_details/', views.gameDetails),
    # path('event_details/', views.eventDetails),
    # path('player_details/', views.playerDetails),
    # path('tournament_details/', views.tournamentDetails),






]
