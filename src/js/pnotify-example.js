import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';

// Set default styling.
PNotify.defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
PNotify.defaults.icons = 'material';

PNotify.alert('Hello world!');

PNotify.notice({
  text: "I'm a notice.",
});
