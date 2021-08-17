import { NativeModules } from 'react-native';
import './android-auto.global';

const { AndroidAuto } = NativeModules;

export { Screen, ScreenManager, useCarNavigation } from "./AndroidAutoReact";
export { render } from "./AndroidAutoReconciler";
export { AndroidAutoModule } from "./AndroidAuto";

export default AndroidAuto;
