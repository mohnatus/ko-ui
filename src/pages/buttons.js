import { observable, observableArray } from 'knockout';
import * as Button from '@/interface/components/button';
import { registerComponent } from '@/interface/engine/register-component';

registerComponent('c-button', Button);

registerComponent('page-buttons', {
	model: () => {
		return {};
	},
	template: `
    <div>
      <h1>Кнопки</h1>

      <h2>Обычные</h2>

      <c-button>Default button</c-button>
      <c-button params="theme: 'primary'">Default button</c-button>
      <c-button params="theme: 'primary-inverse'">Default button</c-button>
      <c-button params="theme: 'accent'">Default button</c-button>
      <c-button params="theme: 'white'">Default button</c-button>
      <c-button params="theme: 'primary', mode: 'text'">Default button</c-button>

      <h2>С иконками</h2>

      <c-button params="appendIcon: {name: 'i-folder', size: 20, color: 'var(--primary)' }">Button with append</c-button>
      <c-button params="prependIcon: {name: 'i-folder', size: 20, color: 'var(--primary)' }">Button with prepend</c-button>


      <h2>Кнопки-иконки</h2>

      <c-button params="icon: {name: 'i-folder', size: 20, color: 'var(--primary)' }"></c-button>

      <h2>Кнопки-ссылки</h2>
      <c-button params="as: 'link', href: '#'">Link button</c-button>

      <h2>Состояние загрузки</h2>
      <c-button params="pending: true">Default button</c-button>

    </div>
  `,
});
