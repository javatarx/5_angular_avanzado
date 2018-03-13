# angular_avanzado

Tutorial avanzado de programación con Angular

## PWA

### CLI

* ng new myApp --service-worker

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

### Manifest

* Icons
* Theme colors
* Metadata - index.html - assets

### Deploy

* httpS

[Angular Avanzado on Git Hub Pages](https://academiabinaria.github.io/angular_avanzado)

#### GitHub Pages

* npm i -g gh-pages

Scripts

```json
		"gh" : "ng build --prod --base-href /angular_avanzado/",
		"postgh" : "gh-pages -d ../dist",
}
```

#### Server side Not Found

* 404 html - assets

#### Shell

* index.html
  * loader - no script

#### LihghtHouse
