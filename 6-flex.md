# angular_avanzado

Tutorial avanzado de programación con Angular

## Flex-Layout

### npm

* npm i --save @angular/flex-layout

```typescript
import { FlexLayoutModule } from '@angular/flex-layout';
```

### Layout

```html
<div fxLayout="column"
		 fxLayoutAlign="space-between center"
		 fxFlexFill
		 fxLayoutGap="20px">
</div>
```

### Responsive

```html
<div fxLayout="row"
		 fxLayout.lg="column"
		 fxLayoutAlign.lt-md="space-between start"
		 fxHide.xs>
</div>
```
