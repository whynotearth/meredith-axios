## Initial setup

```
yarn add @whynotearth/meredith-axios
```

```
// init file
import { ajax } from './ajax.js';
import { serviceOptions } from '@whynotearth/meredith-axios';
serviceOptions.axios = ajax;
```


```
// ajax.js
import axios from 'axios';
const ajax = axios.create({
  baseURL: BASE_API,
  timeout: 20000,
  // withCredentials should be here and moving it to default headers wont work
  withCredentials: true
});
```

## Usage

Check this file for all available axios requests to API https://github.com/whynotearth/meredith-axios/blob/master/dist/index.js

The in your project import the required service and use the methods inside services.

```
// store module
import { PageService } from '@whynotearth/meredith-axios'

actions: {
  fetch_pages_by_name() {
    return PageService.byName(yourParams, yourOptions)
  }
}
```

When this package updated, you have to run `yarn add @whynotearth/meredith-axios` again inside your project to update it to latest version.
