set WshShell = WScript.CreateObject("WScript.Shell")
strDesktop = WshShell.SpecialFolders("Desktop")
set oShellLink = WshShell.CreateShortcut(strDesktop & "\ReBe.lnk")
oShellLink.TargetPath = "C:\Program Files\Google\Chrome\Application\chrome_proxy.exe"
oShellLink.Arguments = "www.google.com"
oShellLink.WindowStyle = 1
oShellLink.IconLocation = "C:\Program Files\Google\Chrome\Application\116.0.5845.188\VisualElements\Logo.png"
oShellLink.Description = "Rebe site"
oShellLink.WorkingDirectory = "C:\Program Files\Google\Chrome\Application"
oShellLink.Save