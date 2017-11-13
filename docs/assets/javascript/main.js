import { CloseNotification, InputUpload, Tabs, MobileMenu, Copy2Clipboard } from '../../../'

window.onload = function() {
  CloseNotification()
  InputUpload()
  Tabs()
  MobileMenu('#main', '#slidemenu')
  Copy2Clipboard()
}
