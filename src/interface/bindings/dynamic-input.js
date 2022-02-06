import { onBindingDispose } from '@/interface/engine/on-binding-dispose';

import { useMirror } from "../interactions/use-mirror";

function handler(element) {
  let [mirror, dispose] = useMirror(element);

  onBindingDispose(element, () => {
    dispose();
  })
}

export default {
  init: handler
}