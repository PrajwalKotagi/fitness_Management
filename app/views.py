from django.shortcuts import render
from app.models import AdminMaster
from app.models import AddCustomers
from app.models import HealthStatus
from app.models import AddPlan
from app.models import Customers
from app.models import Health
from app.models import Videos
from app.models import Register
from app.models import Events
from app.models import Products
from app.models import Equipments
from app.models import Diet
from app.models import Buying


from django.http import HttpResponse
from django.http import JsonResponse



# Create your views here.

# web
def openHome(request):
	return render(request, 'web/index.html');

def viewAbout(request):
	return render(request, 'web/about-us.html');

def viewContact(request):
	return render(request, 'web/contact.html');

def viewGallery(request):
	return render(request, 'web/gallery.html');

def viewPackage(request):
    if 'web_email' in request.session:
        return render(request, 'web/package.html');
    else:
        return render(request, 'web/login.html');

        
        

def viewSchedule(request):
	return render(request, 'web/schedule.html');

def viewLogin(request):
	return render(request, 'web/login.html');

def viewRegister(request):
	return render(request, 'web/register.html');

def viewTrainerVideos(request):
    return render(request, 'web/video.html')

# Admin Pages


def adminIndexadmin(request):
    return render(request, 'admin/indexadmin.html')


def adminAddadmin(request):
    return render(request, 'admin/admin_master.html')

def manageMaster(request):
    return render(request, 'admin/manage_master.html')


def adminAddUserDetails(request):
    return render(request, 'admin/add_customer_details.html')


def manageCustomerDetails(request):
    return render(request, 'admin/manage_customer_details.html')

def addHealthStatus(request):
    return render(request, 'admin/add_health_status.html')


def manageHealthStatus(request):
    return render(request, 'admin/manage_health_status.html')

def addPlan(request):
    return render(request, 'admin/addplan.html')

def managePlan(request):
    return render(request, 'admin/manage_plan.html')

def ViewAdminLogin(request):
    return render(request, 'admin/admin_login.html')

def viewEventManagement(request):
    return render(request, 'admin/event_management.html')

def viewProductManagement(request):
    return render(request, 'admin/product_management.html')

def viewEquipmentManagement(request):
    return render(request, 'admin/equipment_management.html')

# trainer

def viewTrainer(request):
    return render(request, 'trainer/index_trainer.html')

def viewTrainerHealth(request):
    return render(request, 'trainer/add_customer_health.html')

def manageTrainerHealth(request):
    return render(request, 'trainer/manage_customer_health.html')

def viewTrainerCustomer(request):
    return render(request, 'trainer/add_trainer_customer.html')

def manageTrainercustomer(request):
    return render(request, 'trainer/manage_trainer_customer.html')

def viewVideos(request):
    return render(request, 'trainer/add_videos.html')

def viewManageVideos(request):
    return render(request, 'trainer/manage_videos.html')

def viewDietPlan(request):
    return render(request, 'trainer/diet_plan.html')


def viewDietByure(request):
    return render(request, 'trainer/diet_byure.html')


def viewPaySuccess(request):
    return render(request, 'web/pay_success.html')

# def adminManagecoordinator(request):
#     return render(request, 'admin/managecoordinator.html')


# def adminAddevents(request):
#     return render(request, 'admin/addevents.html')


# def adminManageevents(request):
#     return render(request, 'admin/manageevents.html')


# def adminAddgame(request):
#     return render(request, 'admin/addgame.html')


# def adminManagegame(request):
#     return render(request, 'admin/managegame.html')


# def adminAddplayer(request):
#     return render(request, 'admin/addplayer.html')


# def adminManageplayer(request):
#     return render(request, 'admin/manageplayer.html')


# def adminResult(request):
#     return render(request, 'admin/result.html')


# def adminAddtournament(request):
#     return render(request, 'admin/addtournament.html')


# def adminManagetournament(request):
#     return render(request, 'admin/managetournament.html')

def checkAdminLogin(request):
    if AdminMaster.objects.filter(ad_email=request.POST['txtEmail'], ad_password=request.POST['txtPassword']).exists():
        data = AdminMaster.objects.filter(ad_email=request.POST['txtEmail']).values()
        data = list(data)
        dictValue = data[0]
        request.session['email'] = dictValue['ad_email']
        request.session['role'] = dictValue['ad_role']
        request.session['name'] = dictValue['ad_name']
        return HttpResponse(dictValue['ad_role'])
    else:
        return HttpResponse("0") 



# Admindatabase

def adminDetails(request):
    if request.POST['action'] == "add":
        AdminMaster.objects.create(
        ad_name = request.POST['txtName'],
        ad_mobile = request.POST['txtMobileNo'],
        ad_email = request.POST['txtEmailId'],
        ad_password = request.POST['txtPassword'], 
        ad_role = request.POST['txtRole']
        )	

    elif request.POST['action'] == "getData":
        data = AdminMaster.objects.filter(ad_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = AdminMaster.objects.filter(ad_id=request.POST['id']).update(ad_name = request.POST['txtName1'],ad_mobile = request.POST['txtMobileNo1'],ad_email = request.POST['txtEmailId1'],ad_role = request.POST['txtRole1']);
        
    elif request.POST['action'] == "delete":
        data = AdminMaster.objects.filter(ad_id=request.POST['id']).update(ad_status='1')
    
    return HttpResponse()

# add customers(users) 
def adminAddCustomers(request):
    if request.POST['action'] == "add":
        AddCustomers.objects.create(
        co_name = request.POST['txtName'],
        co_address = request.POST['txtAddress'],
        co_zipcode = request.POST['txtZipCode'], 
        co_birth = request.POST['txtBirthDate'],
        co_contact = request.POST['txtContactNo'],
        co_email = request.POST['txtEmail'],
        co_image = request.FILES['txtSelImg'],
        co_height = request.POST['txtHeight'], 
        co_weight = request.POST['txtWeight'],
        co_nationality = request.POST['txtNationality'],
        # co_facebook = request.POST['txtFacebook'],
        # co_twitter = request.POST['txtTwitter'],
        # co_contper = request.POST['txtContactPr'], 
        co_previousgym = request.POST['txtPrevious'],
        co_yeartraning = request.POST['txtYears'],
        co_joining = request.POST['txtJoining'],
        co_age = request.POST['txtAge'],
        co_gender = request.POST['txtGender'], 
        co_proof = request.FILES['txtProof'],
        # co_otherproof = request.FILES['txtOtherProof'],
        # co_created_by = request.session['email'], 
         
        
        )	

    elif request.POST['action'] == "getData":
        data = AddCustomers.objects.filter(co_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = AddCustomers.objects.filter(co_id=request.POST['id']).update(co_name = request.POST['txtName1'],co_address = request.POST['txtAddress1'],co_zipcode = request.POST['txtZipCode1'],co_birth = request.POST['txtBirthDate1'],co_contact = request.POST['txtContactNo1'],co_email = request.POST['txtEmail1'],co_height = request.POST['txtHeight1'],co_weight = request.POST['txtWeight1'],co_nationality = request.POST['txtNationality1'],co_previousgym = request.POST['txtPrevious1'],co_yeartraning = request.POST['txtYears1'],co_joining = request.POST['txtJoining1'],co_age = request.POST['txtAge1'],co_gender = request.POST['txtGender1']);
        
    elif request.POST['action'] == "delete":
        data = AddCustomers.objects.filter(co_id=request.POST['id']).update(co_status='1')
    
    return HttpResponse()


# add Health Status(users) 
def addHealth(request):
    if request.POST['action'] == "add":
        HealthStatus.objects.create(
        ag_name = request.POST['txtName'],
        ag_date = request.POST['txtdate'],
        ag_bodyfat = request.POST['txtBodyFat'], 
        ag_water = request.POST['txtWater'],
        ag_muscle = request.POST['txtMuscle'],
        ag_calorie = request.POST['txtCalorie'],
        ag_bone = request.POST['txtBone'],
        ag_remarks = request.POST['txtRemarks'], 
       
        
        )	

    elif request.POST['action'] == "getData":
        data = HealthStatus.objects.filter(ag_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = HealthStatus.objects.filter(ag_id=request.POST['id']).update(ag_name = request.POST['txtName1'],ag_date = request.POST['txtdate1'],ag_bodyfat = request.POST['txtBodyFat1'],ag_water = request.POST['txtWater1'],ag_muscle = request.POST['txtMuscle1'],ag_calorie = request.POST['txtCalorie1'],ag_bone = request.POST['txtBone1'],ag_remarks = request.POST['txtRemarks1']);
        
    elif request.POST['action'] == "delete":
        data = HealthStatus.objects.filter(ag_id=request.POST['id']).update(ag_status='1')
    
    return HttpResponse()

# Event Management
def viewAddEvents(request):
    if request.POST['action'] == "add":
        Events.objects.create(
        em_name = request.POST['txtName'],
        em_date = request.POST['txtDate'],
        em_time = request.POST['txtTime'], 
        em_location = request.POST['txtLocation'],
        em_description = request.POST['txtDescription'],
        em_image = request.FILES['selImage'],
 
        )	

    elif request.POST['action'] == "getData":
        data = Events.objects.filter(em_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = Events.objects.filter(em_id=request.POST['id']).update(em_name = request.POST['txtName1'],em_date = request.POST['txtDate1'],em_time = request.POST['txtTime1'],em_location = request.POST['txtLocation1'],em_description = request.POST['txtDescription1']);
        
    elif request.POST['action'] == "delete":
        data = Events.objects.filter(em_id=request.POST['id']).update(em_status='1')
    
    return HttpResponse()

#  Diet Plan
def viewAddDietPlan(request):
    if request.POST['action'] == "add":
        Diet.objects.create(
        dp_name = request.POST['txtName'],
        dp_price = request.POST['txtPrice'],
        dp_image = request.FILES['selImage'],
        dp_created_by = request.session['email'],

 
        )	

    elif request.POST['action'] == "getData":
        data = Diet.objects.filter(dp_status='0',dp_created_by = request.session['email']).values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = Diet.objects.filter(dp_id=request.POST['id']).update(dp_name = request.POST['txtName1'],dp_price = request.POST['txtPrice1']);
        
    elif request.POST['action'] == "delete":
        data = Diet.objects.filter(dp_id=request.POST['id']).update(dp_status='1')
    
    return HttpResponse()


# Product Management
def viewAddProducts(request):
    if request.POST['action'] == "add":
        Products.objects.create(
        pm_name = request.POST['txtName'],
        pm_description = request.POST['txtDescription'],
        pm_image = request.FILES['selImage'],
 
        )	

    elif request.POST['action'] == "getData":
        data = Products.objects.filter(pm_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = Products.objects.filter(pm_id=request.POST['id']).update(pm_name = request.POST['txtName1'],pm_description = request.POST['txtDescription1']);
        
    elif request.POST['action'] == "delete":
        data = Products.objects.filter(pm_id=request.POST['id']).update(pm_status='1')
    
    return HttpResponse()

# Equipment Management
def viewAddEquipments(request):
    if request.POST['action'] == "add":
        Equipments.objects.create(
        ep_name = request.POST['txtName'],
        ep_image = request.FILES['selImage'],
 
        )	

    elif request.POST['action'] == "getData":
        data = Equipments.objects.filter(ep_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = Equipments.objects.filter(ep_id=request.POST['id']).update(ep_name = request.POST['txtName1']);
        
    elif request.POST['action'] == "delete":
        data = Equipments.objects.filter(ep_id=request.POST['id']).update(ep_status='1')
    
    return HttpResponse()


# add Plan(users) 
def planDetails(request):
    if request.POST['action'] == "add":
        AddPlan.objects.create(
        ae_name = request.POST['txtName'],
        ae_price = request.POST['txtPrice'],
        ae_month = request.POST['txtMonth'],

     
       
        
        )	

    elif request.POST['action'] == "getData":
        data = AddPlan.objects.filter(ae_status='0').values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = AddPlan.objects.filter(ae_id=request.POST['id']).update(ae_name = request.POST['txtName1'],ae_price = request.POST['txtPrice1'],ae_month = request.POST['txtMonth1']);
        
    elif request.POST['action'] == "delete":
        data = AddPlan.objects.filter(ae_id=request.POST['id']).update(ae_status='1')
    
    return HttpResponse()

def viewCustomer(request):
    if request.POST['action'] == "add":
        Customers.objects.create(
        tc_name = request.POST['txtName'],
        tc_address = request.POST['txtAddress'],
        tc_zipcode = request.POST['txtZipCode'], 
        tc_birth = request.POST['txtBirthDate'],
        tc_contact = request.POST['txtContactNo'],
        tc_email = request.POST['txtEmail'],
        tc_image = request.FILES['txtSelImg'],
        tc_height = request.POST['txtHeight'], 
        tc_weight = request.POST['txtWeight'],
        tc_nationality = request.POST['txtNationality'],
        # tc_facebook = request.POST['txtFacebook'],
        # tc_twitter = request.POST['txtTwitter'],
        # tc_contper = request.POST['txtContactPr'], 
        tc_previousgym = request.POST['txtPrevious'],
        tc_yeartraning = request.POST['txtYears'],
        tc_joining = request.POST['txtJoining'],
        tc_age = request.POST['txtAge'],
        tc_gender = request.POST['txtGender'], 
        tc_proof = request.FILES['txtProof'],
        # tc_otherproof = request.FILES['txtOtherProof'], 
        tc_created_by = request.session['email'], 

        
        )	

    elif request.POST['action'] == "getData":
        data = Customers.objects.filter(tc_status='0', tc_created_by = request.session['email']).values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = Customers.objects.filter(tc_id=request.POST['id']).update(tc_name = request.POST['txtName1'],tc_address = request.POST['txtAddress1'],tc_zipcode = request.POST['txtZipCode1'],tc_birth = request.POST['txtBirthDate1'],tc_contact = request.POST['txtContactNo1'],tc_email = request.POST['txtEmail1'],tc_height = request.POST['txtHeight1'],tc_weight = request.POST['txtWeight1'],tc_nationality = request.POST['txtNationality1'],tc_previousgym = request.POST['txtPrevious1'],tc_yeartraning = request.POST['txtYears1'],tc_joining = request.POST['txtJoining1'],tc_age = request.POST['txtAge1'],tc_gender = request.POST['txtGender1']);
        
    elif request.POST['action'] == "delete":
        data = Customers.objects.filter(tc_id=request.POST['id']).update(tc_status='1')
    
    return HttpResponse()

def viewCustomerHealth(request):
    if request.POST['action'] == "add":
        Health.objects.create(
        ht_name = request.POST['txtName'],
        ht_date = request.POST['txtdate'],
        ht_bodyfat = request.POST['txtBodyFat'], 
        ht_water = request.POST['txtWater'],
        ht_muscle = request.POST['txtMuscle'],
        ht_calorie = request.POST['txtCalorie'],
        ht_bone = request.POST['txtBone'],
        ht_remarks = request.POST['txtRemarks'], 
        ht_created_by = request.session['email'], 

       
        
        )	

    elif request.POST['action'] == "getData":
        data = Health.objects.filter(ht_status='0', ht_created_by = request.session['email'] ).values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
        
    elif request.POST['action'] == "update":
        data = Health.objects.filter(ht_id=request.POST['id']).update(ht_name = request.POST['txtName1'],ht_date = request.POST['txtdate1'],ht_bodyfat = request.POST['txtBodyFat1'],ht_water = request.POST['txtWater1'],ht_muscle = request.POST['txtMuscle1'],ht_calorie = request.POST['txtCalorie1'],ht_bone = request.POST['txtBone1'],ht_remarks = request.POST['txtRemarks1']);
        
    elif request.POST['action'] == "delete":
        data = Health.objects.filter(ht_id=request.POST['id']).update(ht_status='1')
    
    return HttpResponse()


# Upload Videos

def UploadVideos(request):
	if request.POST['action'] == "add":
		Videos.objects.create(
			# ct_name = request.POST['txtName'],
			ct_video = request.POST['txtVideo'],
			)		

	elif request.POST['action'] == "getData":
		# data = Videos.objects.filter(ct_created_by =  request.session['email'],ct_status='0').values()
		data = Videos.objects.filter(ct_status='0').values()
		data = list(data)
		values = JsonResponse(data, safe=False)
		return values;

	elif request.POST['action'] == "update":
		data = Videos.objects.filter(ct_id=request.POST['id']).update(ct_video = request.POST['txtVideo1']);

	elif request.POST['action'] == "delete":
		data = Videos.objects.filter(ct_id=request.POST['id']).update(ct_status='1');

	return HttpResponse(); 

# 
def getVideos(request):
    data = Videos.objects.filter(ct_status='0').values()
    data = list(data)
    values = JsonResponse(data, safe=False)
    return values

def getPlan(request):
    data = AddPlan.objects.filter(ae_status='0').values()
    data = list(data)
    values = JsonResponse(data, safe=False)
    return values

def userRegister(request):

    if Register.objects.filter(us_email=request.POST['txtEmail'], us_mobile=request.POST['txtMobileNo']).exists():
        return HttpResponse('10')
    else:
        lclID = Register.objects.count()
        status = "0"
        lclNewID = lclID + 1

        Register.objects.create (
            us_id = lclNewID,
            us_name = request.POST['txtName'],
            us_mobile = request.POST['txtMobileNo'],
            us_email = request.POST['txtEmail'],
            us_password = request.POST['txtPassword'],
            us_address = request.POST['txtAddress'],

        )

        return HttpResponse('0')


def userLoginValidate(request):
    if Register.objects.filter(us_email=request.POST['txtEmail'], us_password=request.POST['txtPassword'], us_status='0').exists():
        products_json = Register.objects.filter(us_email=request.POST['txtEmail']).values()
        data = list(products_json)
        dictValue = data[0]
        request.session['web_email'] = dictValue['us_email']
        request.session['web_name'] = dictValue['us_name']
        return HttpResponse("1")
    else:
        return HttpResponse("0")

def checkWebLogin(request):
    if Register.objects.filter(us_email=request.POST['txtEmail1'], us_password=request.POST['txtPassword1']).exists():
        request.session['web_email'] = request.POST['txtEmail1']
        return HttpResponse("1")
    else:
        return HttpResponse("10")






def getEquipments(request):
	products_json = Equipments.objects.filter(ep_status='0').values()
	data = list(products_json)
	value = JsonResponse(data, safe=False)
	return value


def getFitnessFood(request):
	products_json = Products.objects.filter(pm_status='0').values()
	data = list(products_json)
	value = JsonResponse(data, safe=False)
	return value


def getEvents(request):
	products_json = Events.objects.filter(em_status='0').values()
	data = list(products_json)
	value = JsonResponse(data, safe=False)
	return value


def getDietPlan(request):
	products_json = Diet.objects.filter(dp_status='0').values()
	data = list(products_json)
	value = JsonResponse(data, safe=False)
	return value


def viewCustomerBuying(request):
    if request.POST['action'] == "add":
        Buying.objects.create(
            bk_name = request.POST['txtName'],
            bk_mobile = request.POST['txtMobileNo'],
            bk_email = request.POST['txtEmail'], 
            bk_location = request.POST['txtLocation'], 
            bk_price = request.POST['priceDetails'], 
            # bk_carname = request.POST['productName'], 
            bk_created_by = request.session['email'], 


           )	

    elif request.POST['action'] == "getData":
        data = Buying.objects.filter(bk_status='0',   bk_created_by = request.session['email']). values()
        data = list(data)
        values = JsonResponse(data, safe=False)
        return values
    
    return HttpResponse()