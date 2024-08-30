import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
	interface HTMLElementTagNameMap {
		'table-view': TableViewElement;
	}
}

@customElement('table-view')
export class TableViewElement extends LitElement {
	protected render(): TemplateResult {
		return html`Table view`;
	}

	static styles = css`
		* {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
	`;
}
