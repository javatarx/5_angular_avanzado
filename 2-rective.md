# angular_avanzado

Tutorial avanzado de programación con Angular

## Reactive Form

### Module and Library

```typescript
import { ReactiveFormsModule } from '@angular/forms';
```

### Dependencies

```typescript
	constructor(private formBuilder: FormBuilder) {}
```

### FormBuilder

```typescript
this.form = this.formBuilder.group({
	fieldName1: ['', [Validators.required]],
	fieldName2: [
		value2,
		[Validators.required, Validators.min(0)]
	],
	fieldName2: this.property
});
```

### Form mark up

```html
<form [formGroup]="form">
	<input name="fieldName1"
				formControlName="fieldName1"
				autocomplete="field Name instructions"
				type="text" />
	<button [disabled]="form.invalid"
	        (click)="saveOperation(form.value)">Save</button>
</form>
```
