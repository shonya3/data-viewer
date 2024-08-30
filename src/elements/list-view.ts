import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
	interface HTMLElementTagNameMap {
		'list-view': ListViewElement;
	}
}

@customElement('list-view')
export class ListViewElement extends LitElement {
	protected render(): TemplateResult {
		return html`List View`;
	}

	static styles = css`
		* {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
	`;
}
