# angular_avanzado

Tutorial avanzado de programación con Angular

## Redux

### Terminology

* Store {}
  * state {}
* action{}
  * type "[slice] name"
  * payload
* reducer()
  * state
  * action
* slice
  * property
  * reducer

### Flow

* 1 Components dispatch actions
* 2 Actions mutate state with reducer functions
* 3 Store notifies changes
* 4 Subscribers get the new state
* 5 Components detect changes
