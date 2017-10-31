import { CloseNotification, InputUpload, Tabs, MobileMenu } from '../'

window.onload = function() {
  CloseNotification()
  InputUpload()
  Tabs()
  MobileMenu('#main', '#slidemenu')
}
