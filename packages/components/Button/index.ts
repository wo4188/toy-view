import Button from './Button.vue';
import ButtonGroup from './ButtonGroup.vue';
import { withInstallComponent } from '@toy-element/utils';

export const ToyButton = withInstallComponent(Button);
export const ToyButtonGroup = withInstallComponent(ButtonGroup);

export * from "./types";
