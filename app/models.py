from django.db import models

# Create your models here.


class AdminMaster(models.Model):
	ad_id = models.AutoField(primary_key=True, unique = True)
	ad_name = models.CharField(max_length=100)
	ad_mobile = models.CharField(max_length=100)
	ad_email = models.CharField(max_length=100)
	ad_password = models.CharField(max_length=100)
	ad_role = models.CharField(max_length=100)
	ad_status = models.IntegerField(default=0)
	ad_created_by = models.CharField(max_length=100)


class AddCustomers(models.Model):
	co_id = models.AutoField(primary_key=True, unique = True)
	co_name = models.CharField(max_length=100)
	co_address = models.CharField(max_length=100)
	co_zipcode = models.CharField(max_length=100)
	co_birth = models.CharField(max_length=100)
	co_contact = models.CharField(max_length=100)
	co_email = models.CharField(max_length=100)
	co_image = models.FileField(upload_to="app/static/media/image",default="")
	co_height = models.CharField(max_length=100)
	co_weight = models.CharField(max_length=100)
	co_nationality = models.CharField(max_length=100)
	# co_facebook = models.CharField(max_length=100)
	# co_twitter = models.CharField(max_length=100)
	# co_contper = models.CharField(max_length=100)
	co_previousgym = models.CharField(max_length=100)
	co_yeartraning = models.CharField(max_length=100)
	co_joining = models.CharField(max_length=100)
	co_age = models.CharField(max_length=100)
	co_gender = models.CharField(max_length=100)
	co_proof = models.FileField(upload_to="app/static/media/image",default="")
	# co_otherproof = models.FileField(upload_to="app/static/media/image",default="")
	co_status = models.IntegerField(default=0)
	co_created_by = models.CharField(max_length=100)


class HealthStatus(models.Model):
	ag_id = models.AutoField(primary_key=True, unique = True)
	ag_name = models.CharField(max_length=100)
	ag_date = models.CharField(max_length=100)
	ag_bodyfat = models.CharField(max_length=100)
	ag_water = models.CharField(max_length=100)
	ag_muscle = models.CharField(max_length=100)
	ag_calorie = models.CharField(max_length=100)
	ag_bone = models.CharField(max_length=100)
	ag_remarks = models.CharField(max_length=100)
	ag_status = models.IntegerField(default=0)
	ag_created_by = models.CharField(max_length=100)
	# ag_created_at =models.DateTimeField(default=timezone.now)

class AddPlan(models.Model):
	ae_id = models.AutoField(primary_key=True, unique = True)
	ae_name = models.CharField(max_length=100)
	ae_price = models.CharField(max_length=100)
	ae_month = models.CharField(max_length=100,default="")
	ae_status = models.CharField(max_length=100,default=0)
	ae_created_by = models.CharField(max_length=100)



class Customers(models.Model):
	tc_id = models.AutoField(primary_key=True, unique = True)
	tc_name = models.CharField(max_length=100)
	tc_address = models.CharField(max_length=100)
	tc_zipcode = models.CharField(max_length=100)
	tc_birth = models.CharField(max_length=100)
	tc_contact = models.CharField(max_length=100)
	tc_email = models.CharField(max_length=100)
	tc_image = models.FileField(upload_to="app/static/media/image",default="")
	tc_height = models.CharField(max_length=100)
	tc_weight = models.CharField(max_length=100)
	tc_nationality = models.CharField(max_length=100)
	# tc_facebook = models.CharField(max_length=100)
	# tc_twitter = models.CharField(max_length=100)
	# tc_contper = models.CharField(max_length=100)
	tc_previousgym = models.CharField(max_length=100)
	tc_yeartraning = models.CharField(max_length=100)
	tc_joining = models.CharField(max_length=100)
	tc_age = models.CharField(max_length=100)
	tc_gender = models.CharField(max_length=100)
	tc_proof = models.FileField(upload_to="app/static/media/image",default="")
	# tc_otherproof = models.FileField(upload_to="app/static/media/image",default="")
	tc_status = models.IntegerField(default=0)
	tc_created_by = models.CharField(max_length=100)


class Health(models.Model):
	ht_id = models.AutoField(primary_key=True, unique = True)
	ht_name = models.CharField(max_length=100)
	ht_date = models.CharField(max_length=100)
	ht_bodyfat = models.CharField(max_length=100)
	ht_water = models.CharField(max_length=100)
	ht_muscle = models.CharField(max_length=100)
	ht_calorie = models.CharField(max_length=100)
	ht_bone = models.CharField(max_length=100)
	ht_remarks = models.CharField(max_length=100)
	ht_status = models.IntegerField(default=0)
	ht_created_by = models.CharField(max_length=100)

class Videos(models.Model):
	ct_id = models.AutoField(primary_key=True, unique= True)
	# ct_name = models.CharField(max_length=100)
	ct_video = models.TextField(default="")
	ct_status = models.IntegerField(default=0)
	ct_created_by = models.CharField(max_length=100)


class Register(models.Model):
	us_id = models.AutoField(primary_key=True, unique= True)
	us_name = models.CharField(max_length=100, default="")
	us_email = models.CharField(max_length=100)
	us_mobile = models.CharField(max_length=100, default="")
	us_password = models.CharField(max_length=100)
	us_address = models.CharField(max_length=100,default="")
	us_status = models.IntegerField(default=0)
	us_created_by = models.CharField(max_length=100,default="")


class Events(models.Model):
	em_id = models.AutoField(primary_key=True, unique = True)
	em_name = models.CharField(max_length=100)
	em_date = models.CharField(max_length=100)
	em_time= models.CharField(max_length=100)
	em_location= models.CharField(max_length=100,default="")
	em_description= models.CharField(max_length=100,default="")
	em_image = models.FileField(upload_to="app/static/media/images", default="")
	em_status = models.IntegerField(default=0)
	em_created_by = models.CharField(max_length=100)

class Products(models.Model):
	pm_id = models.AutoField(primary_key=True, unique = True)
	pm_name = models.CharField(max_length=100)
	pm_description= models.CharField(max_length=100,default="")
	pm_image = models.FileField(upload_to="app/static/media/images", default="")
	pm_status = models.IntegerField(default=0)
	pm_created_by = models.CharField(max_length=100)

class Equipments(models.Model):
	ep_id = models.AutoField(primary_key=True, unique = True)
	ep_name = models.CharField(max_length=100)
	ep_image = models.FileField(upload_to="app/static/media/images", default="")
	ep_status = models.IntegerField(default=0)
	ep_created_by = models.CharField(max_length=100)

class Diet(models.Model):
	dp_id = models.AutoField(primary_key=True, unique = True)
	dp_name = models.CharField(max_length=100)
	dp_price = models.CharField(max_length=100)
	dp_image = models.FileField(upload_to="app/static/media/images", default="")
	dp_status = models.IntegerField(default=0)
	dp_created_by = models.CharField(max_length=100)


class Buying(models.Model):
	bk_id = models.AutoField(primary_key=True, unique = True)
	bk_name = models.CharField(max_length=100,default="")
	bk_mobile = models.CharField(max_length=100,default="")
	bk_email = models.CharField(max_length=100,default="")
	bk_location = models.CharField(max_length=100,default="")
	bk_price = models.CharField(max_length=100, default="")
	# bk_carname = models.CharField(max_length=100, default="")
	bk_status = models.IntegerField(default=0)
	bk_created_by = models.CharField(max_length=100)

# class AddPlayer(models.Model):
# 	ap_id = models.AutoField(primary_key=True, unique = True)
# 	ap_name = models.CharField(max_length=100)
# 	ap_mobile = models.CharField(max_length=100)
# 	ap_email = models.CharField(max_length=100)
# 	ap_age = models.CharField(max_length=100)
# 	ap_createid = models.CharField(max_length=100)
# 	ap_status = models.CharField(max_length=100,default=0)
# 	ap_created_by = models.CharField(max_length=100)


# class AddTournament(models.Model):
# 	at_id = models.AutoField(primary_key=True, unique = True)
# 	at_name = models.CharField(max_length=100)
# 	at_game = models.CharField(max_length=100)
# 	at_date = models.CharField(max_length=100)
# 	at_time = models.CharField(max_length=100)
# 	at_place = models.CharField(max_length=100)
# 	# at_role = models.CharField(max_length=100)
# 	at_status = models.CharField(max_length=100,default=0)
# 	at_created_by = models.CharField(max_length=100)

# #Coordinator Player Details
# class ViewPlayer(models.Model):
# 	cp_id = models.AutoField(primary_key=True, unique = True)
# 	cp_name = models.CharField(max_length=100)
# 	cp_mobile = models.CharField(max_length=100)
# 	cp_email = models.CharField(max_length=100)
# 	cp_age = models.CharField(max_length=100)
# 	cp_createdid = models.CharField(max_length=100)
# 	cp_role = models.CharField(max_length=100)
# 	cp_status = models.CharField(max_length=100,default=0)
# 	cp_created_by = models.CharField(max_length=100)


# #Coordinator Assign Player Details
# class AssignPlayer(models.Model):
# 	ca_id = models.AutoField(primary_key=True, unique = True)
# 	ca_name = models.CharField(max_length=100)
# 	ca_mobile  = models.CharField(max_length=100)
# 	ca_email = models.CharField(max_length=100)
# 	ca_age = models.CharField(max_length=100)
# 	ca_createdid = models.CharField(max_length=100)
# 	ca_role = models.CharField(max_length=100)
# 	ca_status = models.CharField(max_length=100,default=0)
# 	ca_created_by = models.CharField(max_length=100)


