import {registerComponent} from '@/interface/engine/register-component';
import * as Icon from '@/interface/components/icon';

registerComponent('svg-icon', Icon)

export default (params) => {
  const { text, } = params;
  return {
    text,
  }
}