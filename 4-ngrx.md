# angular_avanzado

Tutorial avanzado de programación con Angular

## NG RX

### Module and Library

```typescript
import { StoreModule } from '@ngrx/store';
```

### Imports configuration

```typescript
StoreModule.forRoot({ property: functionReducer });
```

### Dependency

```typescript
constructor(private store: Store<IAppState>) {}
```

### Dispatching

```typescript
this.theStore.dispatch({
	type: AN_OPERATION,
	payload: { property: 'value' }
});
```

### Consuming

```typescript
this.myObservableData$ = this.store.select(
	state => state.property
);
```
