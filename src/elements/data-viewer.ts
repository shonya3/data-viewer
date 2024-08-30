import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './list-view';
import './table-view';
import './tiles-view';

declare global {
	interface HTMLElementTagNameMap {
		'data-viewer': DataViewerElement;
	}
}

export const VIEW_VARIANTS = ['list', 'table', 'tiles'] as const;
export type ViewVariant = (typeof VIEW_VARIANTS)[number];

@customElement('data-viewer')
export class DataViewerElement extends LitElement {
	@property({ reflect: true, attribute: 'active-view' }) activeView: ViewVariant = 'list';

	protected render(): TemplateResult {
		return html`<label
			>Add description:
			<input />

			<select @change=${this.#changeActiveView}>
				${VIEW_VARIANTS.map(view => html`<option .value=${view}>${view}</option>`)}
			</select>

			${ActiveView(this.activeView)}
		</label>`;
	}

	#changeActiveView(e: Event) {
		if (!(e.target instanceof HTMLSelectElement)) {
			return;
		}

		this.activeView = e.target.value as ViewVariant;
	}

	static styles = css`
		* {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
	`;
}

function ActiveView(view: ViewVariant) {
	switch (view) {
		case 'list': {
			return html`<list-view></list-view>`;
		}

		case 'table': {
			return html`<table-view></table-view>`;
		}

		case 'tiles': {
			return html`<tiles-view></tiles-view>`;
		}
	}
}
