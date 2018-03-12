# angular_avanzado

Tutorial avanzado de programación con Angular

## PWA

### CLI

* ng new myApp --service-worke

```json
.angular-cli.json "serviceWorker": true
```

```typescript
import { ServiceWorkerModule } from '@angular/service-worker';
ServiceWorkerModule.register('ngsw-worker.js', {
	enabled: environment.production
});
```

### NgSw Config

```json
{ "index": "index.html",
"assetGroups": [
		{name, installMode, updateMode, resources}
	],
	"dataGroups": [
		{name.url,cacheConfig}
	]
}
```

