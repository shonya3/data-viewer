import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
	interface HTMLElementTagNameMap {
		'tiles-view': TilesView;
	}
}

@customElement('tiles-view')
export class TilesView extends LitElement {
	protected render(): TemplateResult {
		return html`Tiles View`;
	}

	static styles = css`
		* {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
	`;
}
