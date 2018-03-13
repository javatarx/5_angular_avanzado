# angular_avanzado

Tutorial avanzado de programación con Angular

## Material Design

### NPM

* npm i --save @angular/material @angular/animations @angular/cdk hammerjs

### index.html

```html
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

### Shared tools module

```typescript
import {
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatFormField,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatSelectModule,
	MatTableModule,
	MatToolbarModule
} from '@angular/material';
```

```json
{
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatDividerModule
	],
	exports: [
		ControlComponent,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatDividerModule
	]
}
```

### Elements

```html
<mat-toolbar color="primary">
</mat-toolbar>
<mat-divider [inset]="true"></mat-divider>
<mat-table   #table
						 [dataSource]="operations">
</mat-table>
```

### Attributes

```html
<a mat-button routerLink="/">{{ title }}</a>
<button mat-button>Text</button>
```

### Forms

```html
<mat-form-field>
		<input matInput
		       name="email"
		       formControlName="email"
		       placeholder="your email"
		       type="email" />
		<mat-error *ngIf="theForm.controls['email'].invalid">"Invalid Email"</mat-error>
	</mat-form-field>
```
