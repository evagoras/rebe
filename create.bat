SCHTASKS /CREATE /SC WEEKLY /D SAT SUN /TN "MyTasks\Rebe task" /TR "C:\Users\evagoras\Desktop\1270.0.1 64819.lnk" /ST 4:35

SCHTASKS /CREATE /SC WEEKLY /D SAT,SUN /TN "MyTasks\Rebe task" /TR "cmd /c """%userprofile
%\Desktop\1270.0.1 64819.lnk"""" /ST 05:34